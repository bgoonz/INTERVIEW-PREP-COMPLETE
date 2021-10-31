const { Client } = require("@notionhq/client");
const Filter = require("bad-words");
const filter = new Filter();

const DATABASE_ID = process.env.NOTION_DATABASE_ID;
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const REPORT_LIMIT = 2;

async function getSuggestion(id) {
  const notionPage = await notion.pages.retrieve({ page_id: id });
  return fromNotionObject(notionPage);
}

async function getSuggestions(startCursor) {
  const notionPages = await notion.databases.query({
    database_id: DATABASE_ID,
    start_cursor: startCursor,
    sorts: [
      {
        property: process.env.NOTION_VOTES_ID,
        direction: "descending",
      },
    ],
    filter: {
      property: process.env.NOTION_REPORTS_ID,
      number: { less_than: REPORT_LIMIT },
    },
  });

  return {
    hasMore: notionPages.has_more,
    nextCursor: notionPages.next_cursor,
    suggestions: notionPages.results.map(fromNotionObject),
  };
}

function createSuggestion(suggestion) {
  return notion.pages.create(
    toNotionObject({ ...suggestion, votes: 0, reports: 0 })
  );
}

async function upVoteSuggestion(id) {
  const suggestion = await getSuggestion(id);
  const votes = suggestion.votes + 1;
  await notion.pages.update({
    page_id: id,
    properties: {
      [process.env.NOTION_VOTES_ID]: { number: votes },
    },
  });
  return votes;
}

async function reportSuggestion(id) {
  const suggestion = await getSuggestion(id);
  const reports = suggestion.reports + 1;
  await notion.pages.update({
    page_id: id,
    properties: {
      [process.env.NOTION_REPORTS_ID]: { number: reports },
    },
  });
  return reports;
}

async function getTags() {
  const database = await notion.databases.retrieve({
    database_id: DATABASE_ID,
  });
  return notionPropertiesById(database.properties)[
    process.env.NOTION_TAGS_SELECT_ID
  ].multi_select.options.map((option) => {
    return { id: option.id, name: option.name };
  });
}

function toNotionObject({
  title,
  tags,
  isProject,
  description,
  votes,
  reports,
  email,
}) {
  return {
    parent: {
      database_id: DATABASE_ID,
    },
    properties: {
      [process.env.NOTION_TITLE_ID]: {
        title: [
          {
            text: {
              content: title,
            },
          },
        ],
      },
      [process.env.NOTION_DESCRIPTION_ID]: {
        rich_text: [
          {
            text: {
              content: description,
            },
          },
        ],
      },
      [process.env.NOTION_EMAIL_ID]: {
        rich_text: [
          {
            text: {
              content: email,
            },
          },
        ],
      },
      [process.env.NOTION_TAGS_SELECT_ID]: {
        multi_select: tags.map((tag) => {
          return { id: tag.id };
        }),
      },
      [process.env.NOTION_VOTES_ID]: {
        number: votes,
      },
      [process.env.NOTION_REPORTS_ID]: {
        number: reports,
      },
      [process.env.NOTION_PROJECT_CHECKBOX_ID]: {
        checkbox: isProject,
      },
    },
  };
}

function fromNotionObject(notionPage) {
  const propertiesById = notionPropertiesById(notionPage.properties);

  const title = propertiesById[process.env.NOTION_TITLE_ID].title[0].plain_text;
  const description =
    propertiesById[process.env.NOTION_DESCRIPTION_ID].rich_text[0].text.content;

  return {
    id: notionPage.id,
    title: filter.clean(`a ${title}`).replace(/^a /, ""),
    votes: propertiesById[process.env.NOTION_VOTES_ID].number,
    reports: propertiesById[process.env.NOTION_REPORTS_ID].number,
    tags: propertiesById[process.env.NOTION_TAGS_SELECT_ID].multi_select.map(
      (option) => {
        return { id: option.id, name: option.name };
      }
    ),
    isProject: propertiesById[process.env.NOTION_PROJECT_CHECKBOX_ID].checkbox,
    description: filter.clean(`a ${description}`).replace(/^a /, ""),
  };
}

function notionPropertiesById(properties) {
  return Object.values(properties).reduce((obj, property) => {
    const { id, ...rest } = property;
    return { ...obj, [id]: rest };
  }, {});
}

module.exports = {
  getSuggestions,
  getSuggestion,
  createSuggestion,
  upVoteSuggestion,
  reportSuggestion,
  getTags,
  REPORT_LIMIT,
};

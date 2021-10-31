const COURSE_NAME = "javascript-simplified-bonus-projects";

it("generates table of contents React code", () => {
  cy.visit(`https://app.podia.com/products/${COURSE_NAME}`);
  cy.get("#email").type(Cypress.env("USERNAME"));
  cy.get("#password").type(Cypress.env("PASSWORD"));
  cy.get('form input[type="submit"]').click();

  const data = new Map();
  cy.get(".section.section-panel[data-section-id]")
    .each((section) => {
      const title = section[0].querySelector(".section-name").textContent;
      const sectionId = section[0].dataset.sectionId;
      const row = [];
      section[0].querySelectorAll(".block[data-block-id]").forEach((block) => {
        const blockId = block.dataset.blockId;
        const name = block.querySelector(
          ".block-info .pr5.mb1.flex.flex-align-center a.no-underline"
        ).textContent;
        if (name.endsWith(".zip")) return;

        const duration = block.querySelector(
          ".flex.flex-align-center.text-sm"
        ).textContent;
        if (duration.includes("words")) return;

        const previewable = block.querySelector(
          'input[type="checkbox"][name="preview"]'
        ).checked;

        row.push({
          name: nameConverter(name),
          duration: durationConverter(duration),
          previewLink:
            previewable &&
            previewLinkConverter(name, title, blockId, sectionId),
        });
      });
      if (row.length > 0) data.set(title, row);
    })
    .then(() => {
      console.log(mapToJSX(data));
    });
});

function nameConverter(name) {
  return name.replace(/\d\d - /, "");
}

function durationConverter(duration) {
  const { hours, minutes, seconds } = duration.match(
    /\(((?<hours>\d+)h\s+)?((?<minutes>\d+)m\s+)?(?<seconds>\d+)s\)/
  ).groups;
  return [hours, minutes, seconds].filter((e) => e != null).join(":");
}

function previewLinkConverter(name, title, blockId, sectionId) {
  name = name.replace(/[\s\/]/g, "-");
  title = title.replace(/[\s\/]/g, "-");
  blockId = blockId.replace(/[\s\/]/g, "-");
  sectionId = sectionId.replace(/[\s\/]/g, "-");
  const link = `https://courses.webdevsimplified.com/courses/${COURSE_NAME}/${sectionId}-${title}/${blockId}-${name}`;
  return link.replace(/-+/g, "-");
}

function mapToJSX(map) {
  const ret = [];
  map.forEach((value, key) => {
    ret.push(`<TableOfContentsSection>
  <TableOfContentsHeader>${key}</TableOfContentsHeader>
  ${value
    .map(({ duration, name, previewLink }) => {
      return `<TableOfContentsRow duration="${duration}" title="${name}" ${
        previewLink ? `previewLink="${previewLink}"` : ""
      } />`;
    })
    .join("\n\t\t")}
</TableOfContentsSection>`);
  });

  return `<TableOfContents>\n\t${ret.join("\n")}\n</TableOfContents>`;
}

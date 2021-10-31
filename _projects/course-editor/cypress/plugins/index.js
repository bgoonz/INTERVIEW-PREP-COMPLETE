/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const dotenvPlugin = require("cypress-dotenv");
const fs = require("fs");
const path = require("path");
module.exports = (on, config) => {
  on("task", {
    readFile({ root, dir, file }) {
      return fs.readFileSync(path.join(root, dir, file));
    },
    getFiles({ folderPath, fileType }) {
      return fs
        .readdirSync(folderPath, { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .flatMap((dir) =>
          fs
            .readdirSync(path.join(folderPath, dir.name))
            .filter((file) => file.endsWith(`.${fileType}`))
            .map((file) => ({ file, dir: dir.name }))
        );
    },
  });
  config = dotenvPlugin(config);
  return config;
};

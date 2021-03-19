const {
  join,
} = require('path');

module.exports = base =>
  (...paths) =>
  join(base, ...paths);

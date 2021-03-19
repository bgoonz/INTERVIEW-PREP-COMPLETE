const {
  readdirSync,
} = require('fs');

module.exports =
  path =>
  readdirSync(
    path
  );

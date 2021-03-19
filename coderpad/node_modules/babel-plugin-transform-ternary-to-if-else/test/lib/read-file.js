const {
  readFile,
} = require('fs');

const pify = require('pify');

const promised = pify(readFile);

module.exports =
  path =>
  promised(path, {
    encoding: 'utf8',
  });

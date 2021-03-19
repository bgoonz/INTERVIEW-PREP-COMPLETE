const {
  transformFile,
} = require('babel-core');

const pify = require('pify');

const transformFilePromise =
  pify(transformFile);

const transform =
  (path, opts) =>
  transformFilePromise(
    path,
    opts
  );

module.exports = transform;

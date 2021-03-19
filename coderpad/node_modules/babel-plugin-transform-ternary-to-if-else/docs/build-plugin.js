// eslint-disable-next-line import/no-extraneous-dependencies
const pify = require('pify');

const {
  readFile,
  writeFile,
} = require('fs');

const {
  join,
} = require('path');

const readFilePromise = pify(readFile);
const writeFilePromise = pify(writeFile);

const main = async () => {
  const {
    argv: [, , input, output],
  } = process;

  const pathInput = join(__dirname, input);
  const pathOutput = join(__dirname, output);

  const code = await readFilePromise(
    pathInput, {
      encoding: 'utf8',
    }
  );

  const content = `
    (() => {
      const require =
        () =>
        __webpack_require__(4);
      const exports = {};
      const module = {
        exports,
      };
      ${code};
      return module.exports;
    })();`;

  await writeFilePromise(
    pathOutput,
    content
  );

  return [
    pathInput,
    pathOutput,
  ];
};

main()
  .then(
    ([pathInput, pathOutput]) => {
      console.log(`Finish: ${pathInput}=>${pathOutput}`);
    },
    (e) => {
      console.error(e);
      process.exit(-1);
    }
  );

const Path = require('./lib/rel-path');

const readCases = require('./lib/read-cases');

const transform = require('./lib/transform-file');

const readFile = require('./lib/read-file');

const safeEval = require('./lib/safe-eval');

const relPath =
  Path(__dirname);

const cases = readCases(
  relPath('cases')
);

const babelrc = relPath('.babelrc');

cases.forEach(
  name =>
  it(
    name,
    async () => {
      const [transformed, compare] = await Promise.all([
        transform(
          relPath(`cases/${name}/input.js`), {
            extends: babelrc,
          }
        ),
        readFile(
          relPath(`cases/${name}/output.js`)
        ),
      ]);

      expect(transformed.code)
        .toBe(compare.trim());

      if (name.startsWith('execute')) {
        const {
          expected,
          output,
        } = safeEval(
          transformed.code
        );

        expect(expected)
          .toBe(output);

        expect(typeof expected)
          .toBe('number');
      }
    }
  )
);

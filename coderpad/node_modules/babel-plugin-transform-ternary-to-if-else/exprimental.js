/*
 * Shuffle control flow to reduce make shorter code,
 * cant guarantee execution order, dont use it.
 */

const babelTemplate = require('babel-template');

module.exports = ({
  types,
}) => {
  const templates = {
    testTernary:
      () =>
      babelTemplate(`
var UID = TEST;
if (UID) {
  CONSEQUENT;
} else {
  ALTERNATE;
}`),
    testNonTernary:
      () =>
      babelTemplate(`
if (TEST) {
  CONSEQUENT;
} else {
  ALTERNATE;
}`),
    testTernaryRet:
      () =>
      babelTemplate(`
var UID = TEST;
var RET;
if (UID) {
  RET = CONSEQUENT;
} else {
  RET = ALTERNATE;
}`),
    testNonTernaryRet:
      () =>
      babelTemplate(`
var RET;
if (TEST) {
  RET = CONSEQUENT;
} else {
  RET = ALTERNATE;
}`),
  };

  const cache = {};

  const template = (key, opts) => {
    let fn = cache[key];
    if (!fn) {
      fn = templates[key]();
      cache[key] = fn;
    }
    return fn(opts);
  };

  const Plugin = {
    visitor: {
      ConditionalExpression(path) {
        const {
          scope,
          node: {
            test,
            consequent,
            alternate,
          },
        } = path;

        const statement =
          path
          .getStatementParent();

        const parent =
          path.findParent(
            p =>
            !p.isConditionalExpression()
          );

        const testTernary =
          types
          .isConditionalExpression(test);

        const expressionStatement =
          parent.isExpressionStatement();

        const UID =
          testTernary ?
          scope
          .generateUidIdentifier('test') :
          null;

        const RET =
          expressionStatement ?
          null :
          scope
          .generateUidIdentifier('case');

        const prefix =
          testTernary ?
          'testTernary' :
          'testNonTernary';

        const suffix =
          expressionStatement ?
          '' :
          'Ret';

        const key =
          `${prefix}${suffix}`;

        const opts = {
          UID,
          RET,
          TEST: test,
          CONSEQUENT: consequent,
          ALTERNATE: alternate,
        };

        statement.insertBefore(
          template(key, opts)
        );

        if (RET) {
          path.replaceWith(RET);
        } else {
          path.remove();
        }
      },
    },
  };

  return Plugin;
};

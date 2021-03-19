const babelTemplate = require('babel-template');

/*
 * Ternary operator is part of conditional
 * expression, if-else keywords are parts of
 * if statement. How can we turn expressions into
 * statements? The answer is IIFE.
 *
 * Sure IIFEs can bloat generated code easily,
 * but currently there is no other way to maintain
 * execution order yet without the verbosity.
 * And mixed expressions surely make it harder.
 *
 * With the "do expressions" proposal landing,
 * this can be improve. Now we should just stick
 * to IIFEs.
 *
 */
module.exports = () => {
  const template =
    babelTemplate(`
(function(){
  if (TEST) {
    return CONSEQUENT;
  }
  return ALTERNATE;
})();
`);

  const Plugin = {
    visitor: {
      ConditionalExpression(path) {
        const {
          node: {
            test,
            consequent,
            alternate,
          },
        } = path;

        path.replaceWith(
          template({
            TEST: test,
            CONSEQUENT: consequent,
            ALTERNATE: alternate,
          })
        );
      },
    },
  };

  return Plugin;
};

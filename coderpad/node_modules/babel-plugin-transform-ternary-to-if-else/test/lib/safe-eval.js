const {
  Script,
  createContext,
} = require('vm');

/*
 * Well, not 100% safe, but safe enough for
 * our test cases.
 */
const safeEval =
  (code, env) => {
    const sandbox =
      Object.assign(
        Object.create(null),
        env
      );

    const script =
      new Script(code);

    const context =
      createContext(sandbox);

    script.runInContext(context);

    return sandbox;
  };

module.exports = safeEval;

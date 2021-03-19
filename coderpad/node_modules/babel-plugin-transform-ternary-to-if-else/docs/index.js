(() => {
  const get = url =>
    new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.addEventListener('readystatechange', () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(xhr);
            } else {
              reject(xhr);
            }
          }
        }, false);
        xhr.send();
      }
    );

  const setStatus = (key, status, message) => {
    if (status === 'error') {
      console.error(key, status, message);
    } else {
      console.log(key, status, message);
    }
    const el = document.getElementById(key);
    el.textContent = message || status;
    el.className = `status status-${status}`;
  };

  const evalCode =
    code =>
    // eslint-disable-next-line
    (0, eval)(code);

  const loadPlugin =
    async (url) => {
      const {
        responseText,
      } = await get(url);
      return responseText;
    };

  const hackBabel =
    code =>
    code.replace('t.p="",t(0)', 't.p="",window.__webpack_require__=t,t(0)');

  const loadBabel =
    async (url) => {
      const {
        responseText,
      } = await get(url);

      const hacked = hackBabel(responseText);

      evalCode(hacked);

      return window.Babel;
    };

  const urlPlugin = './plugin.min.js';
  const urlBabel = 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.24.0/babel.min.js';

  const main =
    async () => {
      const handlers =
        key => [
          (r) => {
            setStatus(key, 'done', `Done loading ${key}`);
            return r;
          },
          (e) => {
            setStatus(key, 'error', `Error loading ${key}`);
            throw e;
          },
        ];

      const [
        pluginCode,
        Babel,
      ] = await Promise.all([
        loadPlugin(urlPlugin)
        .then(
          ...handlers('plugin')
        ),
        loadBabel(urlBabel)
        .then(
          ...handlers('babel')
        ),
      ]);

      const plugin = evalCode(pluginCode);

      let input = '';
      let output = '';
      const transformCode =
        (code) => {
          if (input === code) {
            return output;
          }

          const {
            code: r,
          } = Babel.transform(code, {
            plugins: [plugin],
          });

          input = code;
          output = r;

          return r;
        };

      const $btn = document.getElementById('submit');
      const $input = document.getElementById('input');
      const $output = document.getElementById('output');

      $btn.addEventListener('click', () => {
        setStatus('code', 'pending', 'Start transforming code');

        try {
          $output.value = transformCode($input.value);
          setStatus('code', 'done', 'Done transforming code');
        } catch (e) {
          $output.value = `${e.message}\n${e.stack}`;
          setStatus('code', 'error', 'Failed transforming code');
          throw e;
        }
      }, false);

      return 'finished';
    };

  main()
    .then(
      console.log,
      console.error
    );


  // var loadScript = function (url, key, fn) {
  //   var script = document.createElement('script');
  //   script.src = url;
  //   var clean = function () {
  //     script.removeEventListener('load', onload, false);
  //     script.removeEventListener('error', onerror, false);
  //   };
  //   var onload = function () {
  //     clean();
  //     const obj = window[key];
  //     fn(Boolean(obj), obj);
  //   };
  //   var onerror = function (e) {
  //     clean();
  //     fn(false, null);
  //   };
  //   script.addEventListener('load', onload, false);
  //   script.addEventListener('error', onerror, false);
  //   document.body.appendChild(script);
  // };
})();

// includes the index.js script file before the closing body tag

export default function moveIndexJsToBodyPlugin() {
  return {
    name: 'move-indexjs-to-body-plugin',
    order: 'post',

    // vite hook
    transformIndexHtml(html) {
      let newHtml = '';
      const scriptTagRegExp =
        /<script.*?src="\/assets\/index(.*?)"><\/script>/g;
      const scriptTag = html.match(scriptTagRegExp) || '';

      newHtml = html.replace(new RegExp(scriptTag), '');

      return newHtml.replace(/<\/body>/, `  ${scriptTag}\n  </body>`);
    },
  };
}

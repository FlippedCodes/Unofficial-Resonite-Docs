const aliasList = {
  // avoid unnecessary fallback and suppress errors in console
  '/.*/_sidebar.md': '/_sidebar.md',
  '/.*/_navbar.md': '/_navbar.md',
  // other languages FIXME: not working
  'jp/(.*)': '/jp/$1',
  'kr/(.*)': '/kr/$1',
  'zh-tw/(.*)': '/zh-tw/$1',
  'zh-cn/(.*)': '/zh-cn/$1',

  // Resonite Mod Loader
  '/modding/resoniteModLoader/README': 'https://raw.githubusercontent.com/resonite-modding-group/ResoniteModLoader/main/README.md',
  // FIXME: Write separate js that replaces the links in markdown
  // '/modding/ResoniteModLoader/img/(.*)': 'https://raw.githubusercontent.com/resonite-modding-group/ResoniteModLoader/main/doc/img/$1',
  '/doc/(.*)': '/modding/resoniteModLoader/$1',
  '/modding/resoniteModLoader/(.*)': 'https://raw.githubusercontent.com/resonite-modding-group/ResoniteModLoader/main/doc/$1.md',

  // in game documentation FIXME: not working
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.(.*)': (url) => {
    const regEx = /\/protoflux\/ProtoFlux\.Runtimes\.Execution\.Nodes\.(.*)/;
    const found = url.match(regEx);
    // const nodePath = url.split('/protoflux/')[1];
    if (found.length === 2) {
      const [category] = found[1].toLowerCase().split('.');
      const final = `/protoflux/${category}.md`;
      return final;
    } else return '/protoflux/_404.md';
  },
};

window.$docsify.alias = {
  ...window.$docsify.alias,
  ...aliasList
}

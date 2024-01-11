const aliasList = {
  // avoid unnecessary fallback and suppress errors in console
  '/.*/_sidebar.md': '/_sidebar.md',
  '/.*/_navbar.md': '/_navbar.md',
  // other languages FIXME: not working
  'jp/(.*)': '/jp/$1',
  'kr/(.*)': '/kr/$1',
  'zh-tw/(.*)': '/zh-tw/$1',
  'zh-cn/(.*)': '/zh-cn/$1',

  // Resonite Mod Loader articles
  '/modding/resoniteModLoader/README': 'https://raw.githubusercontent.com/resonite-modding-group/ResoniteModLoader/main/README.md',
  // FIXME: Write separate js that replaces the links in markdown
  // '/modding/ResoniteModLoader/img/(.*)': 'https://raw.githubusercontent.com/resonite-modding-group/ResoniteModLoader/main/doc/img/$1',
  '/doc/(.*)': '/modding/resoniteModLoader/$1',
  '/modding/resoniteModLoader/(.*)': 'https://raw.githubusercontent.com/resonite-modding-group/ResoniteModLoader/main/doc/$1.md',

  // in game documentation FIXME: not working
  '/protoflux/ProtoFlux.Runtimes.Execution.Nodes.(.*)': (url, rawNode) => {
    const nodePath = url.split('/protoflux/')[1];
    const node = rawNode.toLowerCase().split('.');
    // Sometimes there is an extra "FrooxEngine" in the path, so the array is popped from the back ensure the right entry
    // const nodeName = node.pop();
    // const nodeType = node.pop();
    const final = `/protoflux/${node.at(-2)}.md?id=${nodePath}`;
    console.log(final);
    return final;
  },
};

window.$docsify.alias = {
  ...window.$docsify.alias,
  ...aliasList
}

const aliasList = {
  // avoid unnecessary fallback and suppress errors in console
  '/.*/_sidebar.md': '/_sidebar.md',
  '/.*/_navbar.md': '/_navbar.md',
  // other languages FIXME: not working
  'jp/(.*)': '/jp/$1',
  'kr/(.*)': '/kr/$1',
  'zh-tw/(.*)': '/zh-tw/$1',
  'zh-cn/(.*)': '/zh-cn/$1',
  // in game documentation
  // '/node/ProtoFlux\.Runtimes\.Execution\.Nodes\.(.*)\..*': '/protoflux/$1',
  // '/node/ProtoFlux.Runtimes.Execution.Nodes.*': '/protoflux/_404.md',
};

window.$docsify.alias = {
  ...window.$docsify.alias,
  ...aliasList
}

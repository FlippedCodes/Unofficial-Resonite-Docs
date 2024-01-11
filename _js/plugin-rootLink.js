// This plugin checks for a leading "-" in the link and assumes that the root patch was wished for and adjusts the link
function rootLink(hook, vm) {
  // checks for markdown links that start with "-/". Example [Node](-/test/path)
  const regEx = /\[.*\]\(\-.*\)/g

  hook.beforeEach((content) => {
    if (!regEx.test(content)) return;
    content.match(regEx).forEach((link) => {
      const rootPath = window.location.hash.replace('#/', '');
      const backLength = rootPath.split('/').length;
      const backContent = '../'.repeat(backLength)
      const splitLink = link.split('](-/')
      const fixedLink = `${splitLink[0]}](${backContent}${splitLink[1]}`;
      content = content.replace(link, fixedLink)
    });
    return content;
  })
}
// Add plugin to docsify's plugin array
window.$docsify = window.$docsify || {};
$docsify.plugins = [rootLink, ...($docsify.plugins || [])];

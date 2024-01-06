const PMEregexGetImport = /<!-- embedImport:start:(.*?) -->(.*?)<!-- embedImport:end:(.*?) -->/gs;
const PMEregexReplaceImport = (name) =>
  new RegExp(`<!-- embedImport:start:${name} -->(.*?)<!-- embedImport:end:${name} -->`, 'gs');

const PMEregexGetImportName = /<!-- embedImport:start:(.*?) -->/g;

function partialMarkdownEmbed(hook, vm) {
  hook.afterEach((content) => {
    if (!PMEregexGetImport.test(content)) return;
    const data = content.match(PMEregexGetImport);
    data.forEach((embed) => {
      // get name of the embed defined in source file
      const importName = embed
        .match(PMEregexGetImportName)[0]
        .split('<!-- embedImport:start:')[1]
        .split(' -->')[0];
        // get part of the wiki that was wished for using the name
        const importContent = embed
          .split(`<!-- embed:start:${importName} -->`)[1]
          .split(`<!-- embed:end:${importName} -->`)[0];
        // replace imported content with only the stuff we want
        content = content.replace(PMEregexReplaceImport(importName), importContent)
    });
    return content;
  });
}
// Add plugin to docsify's plugin array
window.$docsify = window.$docsify || {};
$docsify.plugins = [partialMarkdownEmbed, ...($docsify.plugins || [])];

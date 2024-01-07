const PMEregexGetImport = /<!-- embedImport:start:(.*?) -->(.*?)<!-- embedImport:end:(.*?) -->/gs;

const PMEregexReplaceImport = (name) =>
  new RegExp(`<!-- embedImport:start:${name} -->(.*?)<!-- embedImport:end:${name} -->`, 'gs');

const PMEregexGetImportName = /<!-- embedImport:start:(.*?) -->/g;

const PMEregexGetEmbedImportName = /^(.*?).md#(.*?) ':include'\)$/gm;

function PMEcreateElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div;
}

function partialMarkdownEmbed(hook, vm) {
  hook.beforeEach((content) => {
    if (!PMEregexGetEmbedImportName.test(content)) return;
    const data = content.match(PMEregexGetEmbedImportName);
    data.forEach((embed) => {
      const parsedImportName = embed.split('.md#')[1].split(' \':include\')')[0]
      const editEmbed = embed.replace(`#${parsedImportName}`, '');
      const final = `
<!-- embedImport:start:${parsedImportName} -->
${editEmbed}
<!-- embedImport:end:${parsedImportName} -->
`;
      content = content.replace(embed, final)
    });
    return content;
  });

  hook.afterEach((content) => {
    if (!PMEregexGetImport.test(content)) return;
    const data = content.match(PMEregexGetImport);
    data.forEach((embed) => {
      // get navbar entries for removal
      const htmlEmbed = PMEcreateElementFromHTML(embed);
      const delTitles = [];
      for (let i = 1; i < 6; i++) {
        if (delTitles.length !== 0) continue;
        const titles = htmlEmbed.querySelectorAll(`div > h${i}`);
        if (titles.length !== 0) titles.forEach((title) => delTitles.push(title.id));
      }
      // remove navbar entries
      hook.doneEach(() => {
        console.log(delTitles);
        const url = window.location.hash.split('?id=')[0];
        delTitles.forEach((delTitle) => {
          const target = document.querySelectorAll(`.section-link[href='${url}?id=${delTitle}']`);
          target.forEach((element) => {
            element.parentElement.nextElementSibling.remove();
            element.parentElement.remove();
          });
        });
      });

      // embed content
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

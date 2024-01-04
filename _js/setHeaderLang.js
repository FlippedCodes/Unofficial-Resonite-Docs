// Set html "lang" attribute based on URL https://github.com/docsifyjs/docsify/blob/develop/docs/index.html
(function () {
    const lang = location.hash.match(/#\/(jp|kr|zh-tw|zh-cn)\//);

    if (lang) {
        document.documentElement.setAttribute("lang", lang[1]);
    }
})();

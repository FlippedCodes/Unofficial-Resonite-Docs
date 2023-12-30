// Set html "lang" attribute based on URL https://github.com/docsifyjs/docsify/blob/develop/docs/index.html
(function () {
    const lang = location.hash.match(/#\/(de-de|es|ru-ru|zh-cn)\//);

    if (lang) {
        document.documentElement.setAttribute("lang", lang[1]);
    }
})();

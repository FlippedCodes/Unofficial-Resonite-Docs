window.$docsify = {
    catchPluginErrors: true,
    name: "Unoffical Resonite Documentaiton",
    repo: "https://github.com/FlippedCodes/resonitewiki/",
    auto2top: true,
    loadSidebar: true,
    loadNavbar: true,
    subMaxLevel: 2,
    logo: "/_images/logo_dark.png", // gets converted with css for dark mode
    formatUpdated: "{YYYY}-{MM}-{DD} {HH}:{mm}",
    tabs: {
        persist: true,
        sync: true,
        theme: "classic",
        tabComments: true,
        tabHeadings: true,
    },
    // Search config https://github.com/docsifyjs/docsify/blob/141ac96add9892fcb345551906770c4e9b2265b0/docs/index.html#L105
    search: {
        noData: {
        // "/de-de/": "Keine Ergebnisse!", example
        "/": "No results!",
        "/jp/": "結果がありません！",
        "/kr/": "결과가 없습니다!",
        "/zh-tw/": "没有结果！",
        "/zh-cn/": "沒有結果！",
        },
        paths: "auto",
        placeholder: {
        "/": "Search",
        "/jp/": "検索",
        "/kr/": "찾다",
        "/zh-tw/": "搜尋",
        "/zh-cn/": "搜索",
        },
        pathNamespaces: ['/jp', '/kr', '/zh-tw', '/zh-cn'],
    },
    fallbackLanguages: ['jp', 'kr', 'zh-tw', 'zh-cn'],
    darklightTheme: {
        dark: { custom_logo_invert: "invert()" },
        light: { custom_logo_invert: "" },
    },
    plugins: [],
};

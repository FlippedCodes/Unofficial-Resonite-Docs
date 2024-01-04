window.$docsify = {
    catchPluginErrors: true,
    name: "Unoffical Resonite Documentaiton",
    repo: "https://github.com/FlippedCodes/Unofficial-Resonite-Docs/",
    auto2top: true,
    loadSidebar: true,
    loadNavbar: true,
    subMaxLevel: 3,
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
    progress: {
        position: "top",
        color: "var(--accent)",
        height: "2px",
    },
    darklightTheme: {
        // Theme colors chose according to Resonite color palette
        dark: {
            custom_dropshadow_color: 'var(--codeBackgroundColor)',
            custom_logo_invert: 'invert()',
            accent: '#ba64f2',
            toogleBackground : '#ffffff',
            background: '#2b2f35',
            textColor: '#e1e1e0',
            codeTextColor : '#e1e1e0',
            codeBackgroundColor : '#11151d',
            borderColor : '#e1e1e0',
            highlightColor : '#ae5458',
        },
        light: {
            custom_dropshadow_color: 'var(--borderColor)',
            custom_logo_invert: '',
            accent: '#e69e50',
            toogleBackground : '#091a28',
            background: '#e1e1e0',
            textColor: '#2b2f35',
            codeTextColor : '#11151d',
            codeBackgroundColor : '#fff',
            borderColor : '#86888b',
            highlightColor : '#ba64f2',
        },
    },
};

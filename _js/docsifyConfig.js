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
        },
        paths: "auto",
        placeholder: {
        // "/de-de/": "Suche", example
        "/": "Search",
        },
        // pathNamespaces: ["/de-de"],
    },
    // fallbackLanguages: ['de-de'],
    darklightTheme: {
        dark: { custom_logo_invert: "invert()" },
        light: { custom_logo_invert: "" },
    },
    plugins: [],
};

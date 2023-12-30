window.$docsify = {
    name: "Unoffical Resonite Documentaiton",
    repo: "https://github.com/FlippedCodes/resonitewiki/",
    auto2top: true,
    loadSidebar: true,
    logo: "/_images/logo_dark.png", // gets converted with css for dark mode
    // themeColor: '#f8f770', // FIXME: gets ignored by selected design
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
        // '/es/': '¡No hay resultados!',
        "/de-de/": "Keine Ergebnisse!",
        // '/ru-ru/': 'Никаких результатов!',
        // '/zh-cn/': '没有结果!',
        "/": "No results!",
        },
        paths: "auto",
        placeholder: {
        // '/es/': 'Buscar',
        "/de-de/": "Suche",
        // '/ru-ru/': 'Поиск',
        // '/zh-cn/': '搜索',
        "/": "Search",
        },
        pathNamespaces: ["/de-de"],
        // pathNamespaces: ['/es', '/de-de', '/ru-ru', '/zh-cn'],
    },
    darklightTheme: {
        dark: { custom_logo_invert: "invert()" },
        light: { custom_logo_invert: "" },
    },
    plugins: [
        // Edit on Github https://github.com/docsifyjs/docsify/blob/167596be51d8918efa2238a0e12eab14445e4022/docs/index.html#L193C16-L193C16
        // footer https://github.com/boopathikumar018/docsify-darklight-theme/blob/master/docs/index.html
        function (hook, vm) {
        const footer = [
            '<footer style="text-align: center; padding-top: 40px;">',
            // 'Unoffical Resonite Wiki &copy; 2024',
            // '<br/>',
            '"Resonite" is a trademark of Yellow Dog Man Studios s.r.o.',
            "<br/>",
            "We are not affiliated with Yellow Dog Man Studios.",
            "<br/>",
            'Made with ❤ by <a href="https://github.com/FlipperLP" target="_blank">@Phil</a>  &copy; 2024',
            "</footer>",
        ].join("");

        // TODO: Look into what this does
        hook.beforeEach((html) => {
            if (/githubusercontent\.com/.test(vm.route.file)) {
            url = vm.route.file
                .replace("raw.githubusercontent.com", "github.com")
                .replace(/\/master/, "/blob/master");
            } else if (/jsdelivr\.net/.test(vm.route.file)) {
            url = vm.route.file
                .replace("cdn.jsdelivr.net/gh", "github.com")
                .replace("@master", "/blob/master");
            } else {
            url =
                "https://github.com/FlippedCodes/resonitewiki/blob/main/" +
                vm.route.file;
            }
            // FIXME: move edit text to the right
            const editText = `\n\n[:memo: Edit on GitHub](${url})`;

            return html + editText + footer;
        });
        },
    ],
};

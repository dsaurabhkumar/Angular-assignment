export const ROUTES = {
    firstModule: {
        route:"firstComponent",
        name: "firstComponent",
        absoluteRoute: "/firstComponent",
        loadChildren: '../first-module/first-module.module#FirstModuleModule',
    },
    secondModule: {
        route:"secondComponent",
        name:"secondComponent",
        absoluteRoute: "/secondComponent",
        loadChildren: "../second-module/second-module.module#SecondModuleModule"
    }
}
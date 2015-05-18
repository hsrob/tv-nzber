define(["require", "exports", 'appmodule'], function (require, exports, appmodule) {
    appmodule.config(['$stateProvider', '$urlRouterProvider', function (stateProvider, urlRouterProvider) {
            stateProvider.state('home', {
                url: '/',
                templateUrl: '/tpl/index.tpl.html'
            });
            urlRouterProvider.otherwise('/');
        }]);
});
//# sourceMappingURL=routes.js.map
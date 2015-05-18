define(["require", "exports", 'appmodule', 'controllers/mainctrl'], function (require, exports, appmodule, mainctrl) {
    ;
    appmodule.config(['$stateProvider', '$urlRouterProvider', function (stateProvider, urlRouterProvider) {
            stateProvider.state('home', {
                url: '/',
                templateUrl: '/tpl/index.tpl.html'
            })
                .state('home.settings', {
                url: 'settings',
                views: {
                    'content': {
                        controller: mainctrl.SettingsCtrl,
                        templateUrl: '/tpl/settings/settings.index.tpl.html'
                    }
                }
            });
            urlRouterProvider.otherwise('/');
        }])
        .run(['$rootScope', '$state', function ($rootScope, $state) {
            $rootScope.$on('$stateChangeSuccess', function (evt, toState) {
                $rootScope.breadcrumbs = toState.name.split('.');
            });
        }]);
});
//# sourceMappingURL=routes.js.map
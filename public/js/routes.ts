import angular = require('angular');
import appmodule = require('appmodule');
import mainctrl = require('controllers/mainctrl');

export interface IRootScope extends ng.IScope{
    breadcrumbs : Array<string>
};

appmodule.config(['$stateProvider', '$urlRouterProvider', function(stateProvider:ng.ui.IStateProvider, urlRouterProvider:ng.ui.IUrlRouterProvider){    
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
    })
    urlRouterProvider.otherwise('/');
}])
.run(['$rootScope', '$state', function($rootScope:IRootScope, $state){
   $rootScope.$on('$stateChangeSuccess', function(evt:ng.IAngularEvent, toState:ng.ui.IState){
       $rootScope.breadcrumbs = toState.name.split('.');
   })
}]);
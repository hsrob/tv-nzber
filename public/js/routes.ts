import angular = require('angular');
import appmodule = require('appmodule');

appmodule.config(['$stateProvider', '$urlRouterProvider', function(stateProvider:ng.ui.IStateProvider, urlRouterProvider:ng.ui.IUrlRouterProvider){
    
    stateProvider.state('home', {
        url: '/',
        templateUrl: '/tpl/index.tpl.html'
    })
    urlRouterProvider.otherwise('/');
}])
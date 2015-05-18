/// <reference path="../../typings/requirejs/require.d.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/angular-material/angular-material.d.ts" />

'use strict';

require.config({
    baseUrl: 'js/',
	paths: {
        jquery: 'lib/jquery/jquery',
		angular: 'lib/angular/angular',
        lodash: 'lib/lodash/lodash',
        'angular-ui-router': 'lib/ui-router/angular-ui-router',
		'angular-animate': 'lib/angular/angular-animate',
        'angular-aria': 'lib/angular/angular-aria',
        'angular-cookies': 'lib/angular/angular-cookies',
        'angular-messages': 'lib/angular/angular-messages',
        'angular-sanitize': 'lib/angular/angular-sanitize',
        'angular-touch': 'lib/angular/angular-touch',
        'angular-material': 'lib/angular-material/angular-material',
        'svg-morpheus': 'lib/svg-morpheus/svg-morpheus',
        'angular-material-icons': 'lib/angular-material-icons/angular-material-icons',
	},

	shim: {
        jquery: {exports: 'jquery'},
		angular: {exports: 'angular', deps: ['jquery']},
        'angular-ui-router': {deps: ['angular'], exports: 'angular-ui-router'},
		'angular-animate': {deps: ['angular'],	exports: 'angular-animate'},
		'angular-aria': {deps: ['angular'],	exports: 'angular-aria'},
		'angular-cookies': {deps: ['angular'],	exports: 'angular-cookies'},
		'angular-messages': {deps: ['angular'],	exports: 'angular-messages'},
		'angular-sanitize': {deps: ['angular'],	exports: 'angular-sanitize'},
		'angular-touch': {deps: ['angular'],	exports: 'angular-touch'},		
		'angular-material': {deps: ['angular'],	exports: 'angular-material'},
		'svg-morpheus': {exports: 'svg-morpheus'},        
		'angular-material-icons': {deps: ['angular'],exports: 'angular-material-icons'}
	}
});

declare module 'angular-ui-router' {
}

require(['jquery','angular', 'angular-animate','angular-aria','angular-cookies','angular-messages','angular-sanitize','angular-touch','angular-ui-router','angular-material','svg-morpheus','angular-material-icons','lodash','appmodule','routes'], 
    function (jQuery:JQueryStatic, angular:ng.IAngularStatic, angularAnimate,angualarAria,angularCookies,angularMessages,angularSanitize,angularTouch,angularUiRouter,angularMaterial,svgMorpheus,angularMaterialIcons,lodash,appmodule,routes) {
//require(['jquery','angular','app.module'],
//    function($:JQueryStatic, angular:ng.IAngularStatic,appModule:ng.IModule){
        $(function(){
    	   angular.bootstrap(document, ['tvnzber']);
           //Something about angular-scenario needing an ng-app directive
           $(document).addClass('ng-app');
        })
    });
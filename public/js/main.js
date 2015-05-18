'use strict';

require.config({
    baseUrl: 'js/',
	paths: {
		app: '.',
		angular: 'lib/angular/angular',
        lodash: 'lib/lodash/lodash',
		'angular-animate': 'lib/angular/angular-animate',
        'angular-aria': 'lib/angular/angular-aria',
        'angular-cookies': 'lib/angular/angular-cookies',
        'angular-messages': 'lib/angular/angular-messages',
        'angular-sanitize': 'lib/angular/angular-sanitize',
        'angular-touch': 'lib/angular/angular-touch',
        'angular-ui-router': 'lib/ui-router/angular-ui-router',
        'angular-material': 'lib/angular-material/angular-material',
        'angular-material-icons': 'lib/angular-material-icons/angular-material-icons',
	},

	shim: {
		angular: {
			exports: 'angular'
		},
		'angular-animate': {
			deps: ['angular'],
			exports: 'angular-animate'
		},
		'angular-aria': {
			deps: ['angular'],
			exports: 'angular-aria'
		},
		'angular-cookies': {
			deps: ['angular'],
			exports: 'angular-cookies'
		},
		'angular-messages': {
			deps: ['angular'],
			exports: 'angular-messages'
		},
		'angular-sanitize': {
			deps: ['angular'],
			exports: 'angular-sanitize'
		},
		'angular-touch': {
			deps: ['angular'],
			exports: 'angular-touch'
		},
		'angular-ui-router': {
			deps: ['angular'],
			exports: 'angular-ui-router'
		},
		'angular-material': {
			deps: ['angular'],
			exports: 'angular-material'
		},
		'angular-material-icons': {
			deps: ['angular'],
			exports: 'angular-material-icons'
		}
	}
});

require([
	'angular',
	'./app/app.module'
], function (angular) {

	angular.bootstrap(document, ['kx.application']);
});
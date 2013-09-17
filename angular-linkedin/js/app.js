// create module for custom directives
var angbootApp = angular.module('angbootApp',[]).config(
	[ '$routeProvider', '$locationProvider','$httpProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.when('/login', {
			templateUrl : 'tpl/login.html'
		}).when('/main', {
			templateUrl : 'tpl/main.html',
			controller : 'AppCtrl'
		}).otherwise({
			redirectTo : '/login'
		});
	}
	]);

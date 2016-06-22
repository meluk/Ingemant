var ingemantApp = angular.module('ingemantApp', [
	'ngRoute',
	'LocalStorageModule',
	'eventureController',
	'eventureServices'
]);

ingemantApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/landing', {
		templateUrl: 'partials/screen-landing.html',
		controller: 'mainController'
	}).
	when('/dashboard', {
		templateUrl: 'partials/screen-clientDashboard.html',
		controller: 'clientDashboardController'
	}).
	when('/machote', {
		templateUrl: 'partials/machote.html'/*,
		controller: 'ListController'*/
	}).
	when('/logIn', {
		templateUrl: 'partials/screen-logIn.html',
		controller: 'logInController'
	}).
	when('/signIn', {
		templateUrl: 'partials/screen-singUp.html',
		controller: 'signInController'
	}).
	otherwise({
		redirectTo :'/landing'
	});
}]);
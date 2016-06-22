var ingemantApp = angular.module('ingemantApp', [
	'ngRoute',
	'LocalStorageModule',
	'eventureController',
	'eventureServices'
]);

ingemantApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/home', {
		templateUrl: 'partials/screen-home.html',
		controller: 'mainController'
	}).
	otherwise({
		redirectTo :'/home'
	});
}]);
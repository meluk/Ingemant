var eventureServices = angular.module("eventureServices", []);

eventureServices.factory('MainFactory', function() {
	var routTo = function(route) {
		window.location.href = '#/' + route;
	}
	return {
		routTo: routTo
	};
});
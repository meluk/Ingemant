eventureController.controller('clientDashboardController', function clientDashboardController($scope, UsersFactory, MainFactory) {
   $scope.currAccount = UsersFactory.getCurrAccount();
});
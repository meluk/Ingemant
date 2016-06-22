var eventureController = angular.module("eventureController", []);

eventureController.controller('mainController', function mainController($scope, MainFactory) {
   //Codigo del controlador.
   $scope.viewTittle = MainFactory.getTitle;
});
eventureController.controller('logInController', function logInController($scope, MainFactory, UsersFactory) {
   //Codigo del controlador.
   $scope.logIn = function() {
   	 $scope.allAcounts = UsersFactory.getAccounts;
     for (var i = 0; i < $scope.allAcounts.length; i++) {
        if ($scope.allAcounts[i].email === $scope.logginAccount.email) {
          if ($scope.allAcounts[i].password === $scope.logginAccount.password) {
            UsersFactory.setCurrAccount($scope.allAcounts[i]);
            MainFactory.routTo("dashboard");
          }else {
            $scope.logInErrorMessage = "Incorrect account number and password combination";
          };
        };
     };
   };
   $scope.clearError = function() {
     $scope.logInErrorMessage = "";
   };
});
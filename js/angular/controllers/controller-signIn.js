eventureController.controller('signInController', function signInController($scope, UsersFactory, MainFactory) {
   function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
	}

   $scope.signIn = function() {
   	 $scope.newAccount.id = randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
   	 UsersFactory.createAccount($scope.newAccount);
   	 MainFactory.routTo("dashboard");
   };
});
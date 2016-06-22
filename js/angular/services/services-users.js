eventureServices.factory('UsersFactory', function UsersFactory(localStorageService) {

  var storedAcounts = localStorageService.get('accounts');
  var accounts = storedAcounts || [];
  var currAccount;

  var createAccount = function(newAccount) {
  	accounts.push(newAccount);
  	localStorageService.set('accounts', accounts);
  	setCurrAccount(newAccount);
  };

  var setCurrAccount = function(Account) {
  	for (var i = 0; i < accounts.length; i++) {
  		if (accounts[i].id === Account.id) {
  			currAccount = accounts[i];
  		};
  	};
  };

  var getAccount = function() {
  	var account = currAccount;
  	return account;
  };

  return {
    getAccounts: accounts,
    createAccount: createAccount,
    setCurrAccount: setCurrAccount,
    getCurrAccount: getAccount,
  };
});
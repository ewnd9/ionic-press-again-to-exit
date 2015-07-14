angular.module('ionic-press-again-to-exit', [])
.factory('$ionicPressAgainToExit', function($rootScope, $ionicPlatform, $ionicHistory) {
  return function(toast) {
    $ionicPlatform.registerBackButtonAction(function(e) {
      if ($rootScope.backButtonPressedOnceToExit) {
        ionic.Platform.exitApp();
      } else if ($ionicHistory.backView()) {
        $ionicHistory.goBack();
      } else {
        $rootScope.backButtonPressedOnceToExit = true;
        toast();

        setTimeout(function() {
          $rootScope.backButtonPressedOnceToExit = false;
        }, 2000);
      }

      e.preventDefault();
      return false;
    }, 101);
  };
});

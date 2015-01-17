angular.module('shortly.navigation', [])

.controller('NavigationController',
  [           '$rootScope', '$state',  '$scope', '$window', '$location', 'Auth',
    function ($rootScope,    $state,    $scope,   $window,   $location,   Auth) {

      // var state = $rootScope.$state.current.name;
      // $scope.showNavigation = (state === 'links' || state === 'shorten');
      //
      //
    $scope.signout = function () {
      Auth.signout();
    };

}]);

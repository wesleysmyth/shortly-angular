angular.module('shortly.links', [])

.controller('LinksController', ['$scope', 'Links', function ($scope, Links) {

  $scope.data = {};
  $scope.data.links = [];

  $scope.init = function() {
    $scope.getLinks();
  }

  $scope.getLinks = function() {
    Links.getLinks()
      .then(function (data) {
        $scope.data.links = data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.init();


}]);

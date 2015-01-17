angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here

  $scope.link = {};
  $scope.currentLink = [];

  $scope.addLink = function() {
    Links.addLink($scope.link.url)
    .then(function(link){
      $scope.link.url = '';
      $scope.currentLink[0] = link;
    })
    .catch(function(error) {
      console.error(error);
    });
  };



});

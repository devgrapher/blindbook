'use strict';

angular.module('myApp.lend', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('lend', {
    url: "/lend",
    templateUrl: 'views/home/lend.html',
    controller: 'lendCtrl'
  });
}])

.controller('lendCtrl', ['$scope', '$location', 'Book',
  function($scope, $location, Book) {
    $scope.books = Book.query();
    $scope.tags = [];
    $scope.save = function() {
      if(!$scope.name || $scope.name.length < 1) return;
      if(!$scope.tags || $scope.tags.length < 1) return;
      if(!$scope.owner || $scope.owner.length < 1) return;
      if(!$scope.phone || $scope.phone.length < 1) return;
      var book = new Book({
        name: $scope.name,
        owner: $scope.owner,
        phone: $scope.phone,
        tags: $scope.tags
      });
      book.$save(function(){
        $location.url('/');
      });
  };
  $scope.add_tag = function() {
    $scope.tags.push($scope.newTag);
    $scope.newTag = '';
  };
}]);

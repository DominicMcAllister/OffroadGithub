(function() {

  var userController = function($scope, gitHub, $routeParams) {

    var clearError = function() {
      $scope.error = null;
    };

    var handleUserResult = function(data) {
      $scope.user = data;
      gitHub.getRepos($scope.user).then(handleUserRepos, handleDataError);
    };

    var handleUserRepos = function(data) {
      $scope.user.repos = data;
    };

    var handleDataError = function(reason) {
      $scope.error = "Failed to load data.";
    };

    $scope.onSearchUserName = function(username) {
      clearError();
      
    };
    
    //default user information
    $scope.repoSortOrder = '+language';
    $scope.repoShowCount = '20';
    
    $scope.username = $routeParams.username;
    gitHub.getUser($scope.username).then(handleUserResult, handleDataError);
  };

  //add the controller to the module
  var app = angular.module('myModule');
  app.controller('UserController', ['$scope', 'gitHubService', '$routeParams', userController]);

}());
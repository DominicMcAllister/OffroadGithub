(function() {

  var repoController = function($scope, gitHubService, $routeParams) {

    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;

    var handleRepoResponse = function(data) {
      $scope.repo = data;

      gitHubService.getRepoContributors($scope.username, $scope.reponame)
                   .then(handleContributorsResponse);
    };

    var handleContributorsResponse = function(data) {
      $scope.repo.contributors = data;
    };

    gitHubService.getRepoDetails($scope.username, $scope.reponame)
                 .then(handleRepoResponse);
  };

  //add the controller to the module
  var app = angular.module('myModule');
  app.controller('RepoController', repoController);

}());
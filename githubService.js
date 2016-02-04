(function() {

  var githubService = function($http) {

    var getUser = function(username) {
      return $http.get('https://api.github.com/users/' + username)
                  .then(function(response) {
                    return response.data;
                  });
    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
                  .then(function(response) {
                    return response.data;
                  });
    };
    
    var getRepoDetails = function(name, repo){
      //https://api.github.com/repos/<name>/<repo>
      var url = 'https://api.github.com/repos/' + name + '/' + repo;
            return $http.get(url)
                  .then(function(response) {
                    return response.data;
                  });
    };
    
    var getRepoContributors = function(name, repo){
      //https://api.github.com/repos/<name>/<repo>/contributors
            var url = 'https://api.github.com/repos/' + name + '/' + repo + '/contributors';
            return $http.get(url)
                  .then(function(response) {
                    return response.data;
                  });
    };
    
    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails,
      getRepoContributors: getRepoContributors
    };
  };

  var app = angular.module('myModule');
  app.factory("gitHubService", githubService);

}());
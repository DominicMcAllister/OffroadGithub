(function() {

  var mainController = function($scope, $interval, $location) {

    $scope.onSearchUserName = function(username) {
      $location.path('/user/' + username);
    };

    var formatTwoDigit = function(n) {
      if (n < 10) return '0' + n;
      return n;
    }

    var updateTime = function() {
      var today = new Date();
      var mm = formatTwoDigit(today.getMonth() + 1);
      var dd = formatTwoDigit(today.getDate());
      var yyyy = today.getFullYear();
      var hh = formatTwoDigit(today.getHours());
      var min = formatTwoDigit(today.getMinutes());
      var sec = formatTwoDigit(today.getSeconds());

      var now = mm + '/' + dd + '/' + yyyy + ' ' + hh + ':' + min + ':' + sec;
      $scope.currentTime = now;
    };

    $scope.onStartStopClock = function() {
      if ($scope.currentClockTimer) {
        $interval.cancel($scope.currentClockTimer);
        $scope.currentClockTimer = null;
        $scope.ClockState = "Start";
      } else {
        $scope.currentClockTimer = $interval(updateTime, 1000);
        $scope.ClockState = "Stop";
      }
    };

    $scope.onStartStopClock();
  };

  //add the controller to the module
  var app = angular.module('myModule');
  app.controller('MainController', ['$scope', '$interval', '$location', mainController]);

}());
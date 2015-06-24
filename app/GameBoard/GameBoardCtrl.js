'use strict';

angular.module('myApp.GameBoard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/GameBoard', {
    templateUrl: 'GameBoard/GameBoard.html',
    controller: 'GameBoardCtrl'
  });
}])

.controller('GameBoardCtrl', ['$scope', function($scope) {
        $scope.map = getMap1();
        $scope.range = function(n) {
            return new Array(n);
        };
        $scope.toLetter = function(n) {
            return String.fromCharCode(64 + n);
        };
}]);
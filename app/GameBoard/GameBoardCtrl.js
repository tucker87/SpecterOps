'use strict';

angular.module('myApp.GameBoard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/GameBoard', {
    templateUrl: 'GameBoard/GameBoard.html',
    controller: 'GameBoardCtrl'
  });
}])

.controller('GameBoardCtrl', ['$scope', function($scope) {
    var map = getMap1();
    $scope.spy = {title: 'spy', column: map.agentStart.column, row: map.agentStart.row};
    
    console.log('Building Hunters');
    var hunters = [];
    for (var i = 0; i<4; i++) {
        var hunter = {column: map.hunterStart.column, row: map.hunterStart.row};
        hunter.title = i+1;
        hunters.push(hunter);
    }
    $scope.hunters = hunters;
    
    console.log('Building Board');
    var board = new Array(map.height);
    for(var r = 0; r < map.height; r++) {
        board[r] = new Array(map.width);
        for(var c = 0; c < map.width; c++) {
            var cell = {};
            cell.isWall = map.walls[r].indexOf(c) >= 0;
            cell.isStreet = map.streets[r].indexOf(c) >= 0;
            board[r][c] = cell; 
        }
    }
    $scope.board = board;
    
    console.log('Building Functions');
    $scope.range = function(n) {
        return new Array(n);
    };
    $scope.toLetter = function(n) {
        return String.fromCharCode(64 + n);
    };
        
    console.log('Building Event Hooks');
    $scope.startCallback = function(event, ui, item) {
        console.log("Dragging: " + item);
        $scope.dragging = item;
    };
    
    $scope.stopCallback = function(event, ui) {
    };
     
     $scope.dropCallback = function(event, ui, column, row) {
         if ($scope.dragging == 'spy') {
             $scope.spy.row = row+1;
             $scope.spy.column = column;
         }
         
         if ($scope.dragging > 0 && $scope.dragging < 5) {
             $scope.hunters[$scope.dragging-1].row = row+1;
             $scope.hunters[$scope.dragging-1].column = column;
         }
         
         updateVision($scope.board, $scope.hunters);
     };
     
}]);
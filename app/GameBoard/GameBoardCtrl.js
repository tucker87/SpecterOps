'use strict';

angular.module('myApp.GameBoard', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/GameBoard', {
            templateUrl: 'GameBoard/GameBoard.html',
            controller: 'GameBoardCtrl'
        });
    }])

    .controller('GameBoardCtrl', ['$scope', function ($scope) {
        var map = getMap1();
        $scope.spy = {title: 'spy', column: map.agentStart.column, row: map.agentStart.row};

        console.log('Building Hunters');
        var hunters = [];
        for (var i = 0; i < 4; i++) {
            var hunter = {column: map.hunterStart.column, row: map.hunterStart.row};
            hunter.title = i + 1;
            hunters.push(hunter);
        }
        $scope.hunters = hunters;

        console.log('Building Board');
        var board = new Array(map.height);
        for (var r = 0; r < map.height; r++) {
            board[r] = new Array(map.width);
            for (var c = 0; c < map.width; c++) {
                var cell = {};
                cell.isWall = map.walls[r].indexOf(c) >= 0;
                cell.streetNames = [];
                board[r][c] = cell;
            }
        }
        $scope.board = board;

        console.log('Building Functions');
        $scope.isStreet = function (r, c) {

        };

        $scope.range = function (n) {
            return new Array(n);
        };
        $scope.toLetter = function (n) {
            return String.fromCharCode(64 + n);
        };

        console.log('Building Event Hooks');
        $scope.dropCallback = function (data, event, row, column) {
            if (data.title == 'spy') {
                $scope.spy.row = row + 1;
                $scope.spy.column = column;
            }

            if (data.title > 0 && data.title < 5) {
                console.log(data.title);
                console.log(hunters);
                console.log($scope.hunters[data.title - 1]);
                $scope.hunters[data.title - 1].row = row + 1;
                $scope.hunters[data.title - 1].column = column;
                console.log(hunters);
            }

            updateVision($scope.board, $scope.hunters);
        };

        drawStreets($scope.board, map.streets);
        updateVision($scope.board, $scope.hunters);
    }]);
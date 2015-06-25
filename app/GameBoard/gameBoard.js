/**
 * Created by Jason Tucker on 6/24/2015.
 */
'use strict';

function updateVision(board, hunters) {
    var watchedStreets = [];

    $.each(board, function(index, row){
        $.each(row, function(index, cell){
           cell.isSeen = false;
        });
    });

    $.each(hunters, function (index, hunter) {
        addVision(board, hunter.column, hunter.row, -1, 0);
        addVision(board, hunter.column, hunter.row, 1, 0);
        addVision(board, hunter.column, hunter.row, 0, -1);
        addVision(board, hunter.column, hunter.row, 0, 1);

        var onStreet = board[hunter.row - 1][hunter.column].isStreet;
        if (onStreet) {
            $.each(board[hunter.row - 1][hunter.column].streetNames, function(index, street){
                watchedStreets.push(street);
            });
        }
    });
    console.log(watchedStreets);
    addStreetVision(board, watchedStreets);
}

function addVision(board, x, y, deltaX, deltaY) {
    var height = board.length;
    var width = board[0].length;

    while (x >= 0 && x < width && y >= 1 && y < height) {
        var cell = board[y-1][x];
        if (!cell.isWall) {
            cell.isSeen = true;
        } else {
            break;
        }
        x += deltaX;
        y += deltaY;
    }
}

function addStreetVision(board, watchedStreets) {
    $.each(board, function(index, row){
        $.each(row, function(index, cell){
            $.each(watchedStreets, function(index, street){
                if (cell.streetNames.indexOf(street) >= 0){
                    cell.isSeen = true;
                }
            });
        });
    });
}

function drawStreets(board, streets) {
    $.each(streets, function(index, street){
        for (var r = street.start.row; r <= street.end.row; r++)
            for (var c = street.start.column; c <= street.end.column; c++) {
                board[r][c].isStreet = true;
                board[r][c].streetNames.push(street.name);
        }
    });
}
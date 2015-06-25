/**
 * Created by Jason Tucker on 6/24/2015.
 */
'use strict';

function updateVision(board, hunters) {
    var watchedStreets = new Array();
    $('#gameBoard td').removeClass('vision');
    $.each(hunters, function (index, hunter) {
        addVision(board, hunter.column, hunter.row, -1, 0);
        addVision(board, hunter.column, hunter.row, 1, 0);
        addVision(board, hunter.column, hunter.row, 0, -1);
        addVision(board, hunter.column, hunter.row, 0, 1);

        var cell = $($('#gameBoard tr').eq(hunter.row)[0].children[hunter.column+1]);
        var onStreet = cell.hasClass('street');
        if (onStreet) {
            $.each(board[hunter.row - 1][hunter.column].streetNames, function(index, street){
                watchedStreets.push(street);
            });
        }
    });
    console.log(watchedStreets);
    addStreetVision(watchedStreets);
}

function addVision(board, x, y, deltaX, deltaY) {
    var height = board.length;
    var width = board[0].length;
    var row = $('#gameBoard tr').eq(y);
    var column = $(row[0].children[x + 1]);


    while (x > 0 && x < width && y > 1 && y < height) {
        x += deltaX;
        y += deltaY;
        row = $('#gameBoard tr').eq(y);
        column = $(row[0].children[x + 1]);
        if (!column.hasClass('wall')) {
            column.addClass('vision');
        } else {
            break;
        }
    }
}

function addStreetVision(watchedStreets) {
    $.each(watchedStreets, function(index, street){
       $('#gameBoard td.'+street).addClass('vision');
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
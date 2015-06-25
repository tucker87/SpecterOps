/**
 * Created by Jason Tucker on 6/24/2015.
 */
'use strict';

function updateVision(board, hunters){
	$('#gameBoard td').removeClass('vision');
	$.each(hunters, function(index, hunter){
		addVision(board, hunter.column, hunter.row, -1, 0);
		addVision(board, hunter.column, hunter.row, 1, 0);
		addVision(board, hunter.column, hunter.row, 0, -1);
		addVision(board, hunter.column, hunter.row, 0, 1);
	});
}

function addVision(board, x, y, deltaX, deltaY) {
	 var height = board.length; 
	 var width = board[0].length;
	 var row = $('#gameBoard tr').eq(y);
	 var column = $(row[0].children[x+1]);
	 
	 while(x > 0 && x < width && y > 1 && y < height) {
		 x += deltaX;
		 y += deltaY;
	 	 row = $('#gameBoard tr').eq(y);
		 column = $(row[0].children[x+1]);
		 if (!column.hasClass('wall'))	{
	 		column.addClass('vision');
			if (column.hasClass('street')) {
				addStreetVision(x, y, height, width);
			}
		 } else {
			 break;
		 }
	 } 
 }
 
 function addStreetVision(x, y, height, width) {
	 var directions = [{x:0,y:-1},{x:0,y:1},{x:-1,y:0},{x:1,y:0}];
	 
	 $.each(directions, function(index, direction){
		var tempX = x + direction.x;
		var tempY = y + direction.y;
		
		if (tempX >= 0 && tempX < width && tempY > 0 && tempY < height){
			var row = $('#gameBoard tr').eq(tempY);
			var column = $(row[0].children[tempX+1]);
			
			if (column.hasClass('street')) {
				column.addClass('vision');
			}		
		}
	 });
	 
	 
	 
 }
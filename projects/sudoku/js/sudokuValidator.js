var puzzle = ["", "", "1", "2", "", "", "", "3", "", "7", "", "", "1", "", "5", "6", "", "8", "", "3", "", "", "", "9", "", "", "5", "4", "1", "", "", "", "2", "5", "", "",  "", "", "", "", "", "", "", "", "", "", "", "5", "7", "", "", "", "9", "1", "1", "", "", "6", "", "", "", "8", "", "5", "", "7", "3", "", "8", "", "", "4", "", "8", "", "", "", "4", "2", "", ""];

$(document).ready(function() {
	//creates the boxes on the page
	var boxStart = '<input type="number" class="box row%row% col%col%" id=box%data% value="%value%">'
	var box;
	var boxRow;
	var row;
	var col;
	for (var i = 0; i <= 81; i++) {
		row = Math.floor(i/9) + 1;
		col = (i % 9) + 1;
		box = boxStart.replace("%data%", i).replace("%value%", puzzle[i]);
		box = box.replace("%row%", row.toString()).replace("%col%", col.toString());
		boxRow = "#boxrow" + Number(row);
		$(boxRow).append(box);
	}

	//grabs the values of the inputs
	$("#submit").click(function () {
		var container= [];
		for (var i=0; i <= 81; i++) {
			container.push($('#box' + i.toString()).val());
		}
		var array = [];
		var count = 0;
 		for (var j = 0; j < 9; j++) {
 			var inner = [];
 			for (var k=0; k < 9; k++) {
 				inner.push(container[count]);
 				count++;
 			}
 			array.push(inner);
 		}
 		console.log(array);
 		var answer = isDone(array);
 		if (answer) {
 			alert("Finished!");
 		} else {
 			alert("Try Again!");
 		}
	});

	function isDone(board){
		var reference = "1,2,3,4,5,6,7,8,9";

		//check all rows for 1-9 
		for (var i = 0; i < 9; i++) {
	  		var row = [];
	  		for (var c=0; c < 9; c++) {
	  			row.push(board[i][c]);
	  		}
	    	if (!checkRef(row)) {
	    		return false;
	    	}
	  	}

		//check all columns for 1-9
		for (var j = 0; j < 9; j++) { //want the second [] to change
			var column = [];
			for (var k = 0; k < 9; k++) { //want the first [] to change
				column.push(board[k][j]);
			}
			if (!checkRef(column)) {
				return false;
			}
		}

		//function puts each number in a 3x3 box into an array
		function checkBox(xStart, yStart) {
			var box = [];
			for (var y = yStart; y < yStart + 3; y++) {  
			    for (var x = xStart; x < xStart + 3; x++) {  
			        box.push(board[y][x]);    
			    }
			}
			return box; 
		}
	 	
	 	//for loops increment through each of the nine 3x3 boxes in a sudoku puzzle
		for (var a = 0; a < 9; a+=3) {
			for (var b = 0; b < 9; b+=3) {
				var isValid = checkRef(checkBox(a,b));
				if (!isValid) {
					return false;
				}
			}
		}

		//function checks whether array passed into it matches the reference array (1-9 sorted)
		function checkRef(array) {
			if (array.sort().toString() !== reference) {
				return false;
			} else {
				return true;
			}
		}

		return true;
	}
});
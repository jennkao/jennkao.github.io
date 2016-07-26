//only programmed one puzzle in, planning to add more in the future!
var puzzle = ["", "", "", "", "", "6", "", "2", "7", 
			 "5", "", "", "", "3", "2", "", "", "9", 
			 "", "", "", "", "", "", "6", "1", "",
			  "", "", "7", "", "", "", "", "5", "", 
			  "", "", "6", "", "", "4", "", "3", "2", 
			  "9", "", "5", "1", "", "", "8", "", "6", 
			  "", "", "8", "5", "", "", "", "", "", 
			  "1", "", "", "", "", "3", "", "", "", 
			  "", "", "", "", "", "", "3", "", "5"];

var solved = ["4", "9", "3", "8", "1", "6", "5", "2", "7", 
			 "5", "6", "1", "7", "3", "2", "4", "8", "9", 
			 "7", "8", "2", "4", "9", "5", "6", "1", "3",
			  "2", "4", "7", "3", "6", "8", "9", "5", "1", 
			  "8", "1", "6", "9", "5", "4", "7", "3", "2", 
			  "9", "3", "5", "1", "2", "7", "8", "4", "6", 
			  "3", "2", "8", "5", "7", "9", "1", "6", "4", 
			  "1", "5", "9", "6", "4", "3", "2", "7", "8", 
			  "6", "7", "4", "2", "8", "1", "3", "9", "5"];


$(document).ready(function() {
	//creates the 81 boxes on the page
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

	//upon clicking the "submit" button
	//grabs the values of the input boxes and passes it through isDone function
	//and provides an alert telling you if the puzzle is solved or not
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
 		var answer = isDone(array);
 		if (answer) {
 			alert("Finished!");
 		} else {
 			alert("Try Again!");
 		}
	});

	//upon clicking the "solve" button, solves the puzzle for you
	$("#solve").click(function(){
		for (var i=0; i < solved.length; i++) {
			var boxID = "#box" + i.toString();
			$(boxID).val(solved[i]);
		}
	})

	//function that tells you whether your sudoku solution is valid
	function isDone(board){
		var reference = "1,2,3,4,5,6,7,8,9";

		//check all rows for numbers 1-9 
		for (var i = 0; i < 9; i++) {
	  		var row = [];
	  		for (var c=0; c < 9; c++) {
	  			row.push(board[i][c]);
	  		}
	    	if (!checkRef(row)) {
	    		return false;
	    	}
	  	}

		//check all columns for numbers 1-9
		for (var j = 0; j < 9; j++) { //want the second [] to change
			var column = [];
			for (var k = 0; k < 9; k++) { //want the first [] to change
				column.push(board[k][j]);
			}
			if (!checkRef(column)) {
				return false;
			}
		}

		//function puts each number in each 3x3 box into an array
		function checkBox(xStart, yStart) {
			var box = [];
			for (var y = yStart; y < yStart + 3; y++) {  
			    for (var x = xStart; x < xStart + 3; x++) {  
			        box.push(board[y][x]);    
			    }
			}
			return box; 
		}
	 	
	 	//checks each of the nine 3x3 boxes for numbers 1-9
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
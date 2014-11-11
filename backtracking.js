function NQueen() {

	this.answer = [];
	this.num 	= '';

	this.solve = function(num) {
		this.num = num;
		this.getAnswer([]);
		return this.answers
	}

	this.getAnswer = function(result) {

		if(result.length === this.num)
			this.answer.push(result);
		
		//loop through row
		for(var currentRow = 0; currentRow < this.num; currentRow++) {
			//loop through column
			for(var currentColumn = 0, totalColumnSolved = result.length; currentColumn < totalColumnSolved; currentColumn++) {
				var previousRow = result[currentColumn];
				if(!check(currentRow,previousRow,currentColumn,totalColumnSolved))
					break;				
			}

			if(currentColumn === totalColumnSolved)
				this.getAnswer(result.concat([currentRow]));			
		}
	}

	function check(currentRow,previousRow,currentColumn,totalColumnSolved) {
		// same row
		if(previousRow === currentRow)
			return false
		// lower row
		if(previousRow - (totalColumnSolved - currentColumn) === currentRow)
			return false
		// upper row
		if(previousRow + (totalColumnSolved - currentColumn) === currentRow)
			return false
		return true
	}

}

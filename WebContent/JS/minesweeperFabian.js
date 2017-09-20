function Board() {
	this.init = function(height, width){
		this.height = height;
		this.width = width;
		
		var fields = new Array(height);
		
		for (var y = 0; y < height; y++) {
			fields[y] = new Array(width);
			
			for(var x = 0; x < width; x++){
				var field = new Feld();
				field.init(y,x);
				fields[y][x] = field;
			}
		};
		this.fields = fields;
	};
	this.setBombs = function(bombCount) {
		var x, y, field;
		x = Math.floor(Math.random() * this.width);
		y = Math.floor(Math.random() * this.height);
		field = this.fields[y][x];
		
		for (var i = 0; i < bombCount; i++) {
			while(field.hasBomb()){
				console.log(x + "," + y + " hat bereits eine Bombe");
				x = Math.floor(Math.random() * this.width);
				y = Math.floor(Math.random() * this.height);
				field = this.fields[y][x];
			}
			field.placeBomb();
			
		}
	}
}

function Feld(){
	this.init = function(width,height){
		this.y = width;
		this.x = height;
		this.bomb = false;
		this.counter = 0;
		this.state = 'clear';
//		console.log(x + "," + y);
	};
	
	this.click = function(){
		//TODO: Feld Angeklickt
		
	};
	
	this.placeBomb = function(){
		this.bomb = true;
		console.log(this.x + "," + this.y + " Bombe platziert");
	}
	
	this.hasBomb = function(){
		return this.bomb;
	}
}

function initGame() {
    var Brett = new Board();
    Brett.init(5,5);
    Brett.setBombs(5);
    console.log(Brett);
};

initGame();

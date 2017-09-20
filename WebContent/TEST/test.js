dir = "img/";

var mines = [];
var shown = [];
var gridx = 5, gridy = 5, maxmines = 1;
var squaresleft, flagsleft;
var elapsedtime;
var playing;
var placeflag;


function keyDown(e) {
	if (document.layers)
		placeflag = (e.modifiers & Event.CONTROL_MASK) > 0;
	else
		placeflag = window.event.ctrlKey;
	setStatus();
}
function keyUp(e) {
	placeflag = false;
	setStatus();
}

function newgame() {
	// reset state arrays. mines holds the position of each mine. shown keeps
	// track of the image shown at each grid location
	var y;
	for (y = 0; y < gridy; ++y) {
		mines[y] = [ false, false, false, false, false, false, false, false,
				false, false, false, false, false, false, false, false ];
		shown[y] = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
	}

	// Place the mines, making sure positions are unique
	var m;
	for (m = 0; m < maxmines; ++m) {
		var x, y;
		do {
			x = Math.floor(Math.random() * gridx);
			y = Math.floor(Math.random() * gridy);
		} while (mines[y][x]);
		mines[y][x] = true;
	}

	// initialise game variables
	squaresleft = gridy * gridx;
	flagsleft = maxmines;
	elapsedtime = 0;
	playing = true;
	placeflag = false;

	// insert the grid into the document
	buildgrid();

	// Set up keypress handlers
	if (document.layers)
		window.captureEvents(Event.KEYDOWN | Event.KEYUP);
	window.onKeyDown = keyDown;
	window.onKeyUp = keyUp;

	// start the clock
	setInterval("ticker()", 1000);
}

// clock tick handler
function ticker() {
	if (playing) {
		elapsedtime++;
		setStatus();
	}
}

// status bar refresh
function setStatus() {
	var s = flagsleft + " mines remaining, " + elapsedtime + " seconds. "
	if (placeflag)
		s = s + " [Ctrl] pressed to place a flag!";
	window.status = s;
}

// function to insert all the IMG tags into the document
function buildgrid() {
	var s = "";
	var x, y;
	for (y = 0; y < gridy; ++y) {
		for (x = 0; x < gridx; ++x) {
			s = s + '<a href="javascript:gridclick(' + y + ',' + x + ');">'
					+ '<img src="' + dir + 'tile0.gif" name="grd' + y + '_' + x
					+ '"></a>'
		}
		s = s + "<br>";
	}
	document.write(s);
}

// Function to calculate the number of mines adjacent to a grid location
function surrounding(y, x) {
	var count = 0;
	if (y > 0 && x > 0 && mines[y - 1][x - 1])
		count++;
	if (y > 0 && mines[y - 1][x])
		count++;
	if (y > 0 && x < gridx - 1 && mines[y - 1][x + 1])
		count++;
	if (x > 0 && mines[y][x - 1])
		count++;
	if (x < gridx - 1 && mines[y][x + 1])
		count++;
	if (y < gridy - 1 && x > 0 && mines[y + 1][x - 1])
		count++;
	if (y < gridy - 1 && mines[y + 1][x])
		count++;
	if (y < gridy - 1 && x < gridx - 1 && mines[y + 1][x + 1])
		count++;
	return count;
}

// Recursive function to 'roll back' the grid when user clicks on a tile
// with no surrounding mines
function rollback(y, x) {
	if (y >= 0 && y < gridy && x >= 0 && x < gridx) {
		if (shown[y][x] != 3) {
			var c = surrounding(y, x);
			shown[y][x] = 3;
			squaresleft--;
			document.images["grd" + y + "_" + x].src = dir + "blank" + c
					+ ".gif";
			if (c == 0) {
				rollback(y - 1, x - 1);
				rollback(y - 1, x);
				rollback(y - 1, x + 1);
				rollback(y, x - 1);
				rollback(y, x + 1);
				rollback(y + 1, x - 1);
				rollback(y + 1, x);
				rollback(y + 1, x + 1);
			}
		}
	}
}

// Function called when player steps on a mine. All mine locations are uncovered
function dead() {
	var y, x;
	for (y = 0; y < gridy; ++y) {
		for (x = 0; x < gridx; ++x) {
			if (mines[y][x]) {
				if (shown[y][x] != 1) {
					document.images["grd" + y + "_" + x].src = dir + "bomb.gif";
				}
			} else if (shown[y][x] == 1) {
				document.images["grd" + y + "_" + x].src = dir + "nobomb.gif";
			}
		}
	}
	alert("Oops! you set off a mine.  Game Over!\n"
			+ "Press your browser's 'Refresh' button to play again.");
	playing = false;
}

// handler called whenever the grid is clicked
function gridclick(y, x) {
	if (playing) {
		if (placeflag) {
			if (shown[y][x] < 3) {
				var s = shown[y][x];
				var change = true;
				if (s == 1) {
					flagsleft++;
					squaresleft++;
				}
				if (flagsleft == 0 && s == 0) {
					change = false;
				} else {
					if (s == 2)
						s = 0;
					else
						s++;
					if (s == 1) {
						flagsleft--;
						squaresleft--;
					}
				}
				if (change) {
					shown[y][x] = s;
					document.images["grd" + y + "_" + x].src = dir + "tile" + s
							+ ".gif";
					setStatus();
				}
				if (squaresleft == 0) {
					alert("Well done! you found all the mines in "
							+ elapsedtime
							+ " seconds.\n"
							+ "Press your browser's 'Refresh' button to play again.");
					playing = false;
				}
			}
		}

		// check not flagged as a mine
		else if (shown[y][x] != 1) {
			if (mines[y][x]) {
				document.images["grd" + y + "_" + x].src = dir + "bomb.gif";
				dead();
			} else {
				rollback(y, x);
			}
		}
	}
}

// Start the game
newgame();
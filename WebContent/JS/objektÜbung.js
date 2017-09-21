function ship(shipName, shipModel, kaptain){
	this.name = shipName;
	this.model = shipModel;
	this.distance = 0;
	this.move = function moveFromEarthAway(lightyears){
		this.distance += lightyears;
		with(this){
			document.write(name + ' => act. Journey:' + lightyears + ' lightyears -> earth distance: ' + distance + ' lightyears <br>');
		}
	this.back = function backToEarth(ly){
		with(this){
			distance -= ly;
			if(distance > 0){
				document.write(name + ' is coming back to earth: just ' + distance + ' lightyears <br>' );
			} else if(distance == 0){
				document.write('Welcome home ' + name + '<br>');
			} else {
				document.write(name + ' is already there <br>');
			}
		}
	}
	}
}

var enterprise = new ship('U.S.S. Enterprise', 'NCC-1701');
var voyager = new ship('U.S.S. Voyager', 'NCC-74656');

document.write('<p> Both spaceships starts from earth: </p>');
enterprise.move(50);
voyager.move(180);

enterprise.move(200);
voyager.move(-50);

enterprise.move(-100);
enterprise.move(-150);

voyager.move(40);
voyager.move(-170);

for(var laufVar in enterprise){
	document.write('Bezeichnung: ' + laufVar + ' -> Wert: ' + enterprise[laufVar] + '<br>');
}

document.write('move' in enterprise);
document.write('<br>');
document.write(enterprise instanceof ship);
document.write('<br>');
document.write('<p>' + enterprise.name + ' starts from earth: </p>');
enterprise.move(50);
enterprise.move(100);
enterprise.back(50);
enterprise.back(100);
enterprise.back(50);

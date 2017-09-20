/**
 * TODO 
 * 0. 	Designfunktionen.
 * 1.	Tabellen automatisch erstellen.
 * 2.	Bomben verteilen  mit start -> math() random.
 * 3.	Click event zum auslösen der Bomben
 * 4. 	Zahlen anzeigen der angrenzenden Bomben.
 */
// design function 
var id = 0;
$(function(){
	$("td").on({
		click:
		function(){
			$(this).addClass("deactivate");
		},
		dblclick:
		function(){
			if($(this).attr('id') != "boom" && $(this).attr('id') != "bombDeac" && $(this).attr('class') != "flag"){
				$(this).toggleClass("question");
			}
		},
		contextmenu:
			function(){
			if($(this).attr('id') != "boom" && $(this).attr('id') != "bombDeac" && $(this).attr('class') != "question"){
				$(this).toggleClass("flag");
			}
		}
	});
	
	id=0;
	$("td").click(function(){
		id = $(this).attr('id'); 
		tdClass = $(this).attr('class');
		if(id == "bomb" && tdClass != "flag deactivate" ){
			var boom = document.getElementById("bomb").id;
			this.id = "boom";
		// Bombe auf entschärft setzen
		} else if(tdClass == "flag deactivate" && id == "bomb"){
			$(this).attr('id', 'bombDeac');
			setHints();
		// wenn es keine geplatze Bombe und keine flag/question ist, dann mach ein hint
		} else if(id != "boom" && tdClass != "flag deactivate" && tdClass != "question deactivate"){
		}
	})
});


// generate table
function genTable(cells) {
	this.tdID = 0;
	for(i = 0; i < cells; i++){
		var tr = document.createElement("TR");
		tr.setAttribute("id", "tr"+i);
		document.getElementById("tbody").appendChild(tr);
		for(j=0;j<cells;j++){
			var td = document.createElement("TD");
			td.setAttribute("id", this.tdID++);
			document.getElementById("tr"+i).appendChild(td);
		}
	}
}


// Bomben verteilen.
function spreadBombs(){
	// Schwierigkeitsauswahl über Radiobutton
	var bomb= document.levelSelection.level.value;
	// Standardwert benutzen
	if(bomb == null){
		bomb = document.getElementById("leicht").value;
	}
	// Anzahl der Bomben kleiner als die Anzahl an Feldern
	if(bomb < this.tdID){
		/* Felder Random mit Bomben füllen
		 * Wenn das Feld nicht die Id #bomb hat -> setze so viele wie angegeben.
		 */
		if(!(document.getElementById("bomb"))){
			// laufe alle Felder ab so lange wie Bomben zu setzen sind
			for(i = 0; i < bomb; i++){
				// zufällig Auswahl der Felder über die ID der Tabellenzellen
				var randTdID = Math.floor(Math.random() * (this.tdID));
				// er soll weiter machen, wenn die Zahl schon einmal gezogen worden war
				//  oder wenn die zufällig ID nicht die geklickte id ist, dann setze die Bombe
				if((document.getElementById(randTdID) == null) || randTdID == this.id){
					i--;
					continue;
				} else {
					document.getElementById(randTdID).id = "bomb";
				}
					
			}
		}
		// Fehler bei zu vielen Bomben und zu wenig Feldern.
	} else if (bomb >= this.tdID){
		toMuchBombs = bomb - this.tdID;
		newBomb = bomb-toMuchBombs-1;
		if((toMuchBombs+1) == 1){
			alert("Du hast 1 Bombe zu viel gesetzt! Es gibt nur maximal " + this.tdID + " Felder. Deswegen wurde deine Bombenanzahl auf " + newBomb + " Bomben herunter gesetzt.");
		} else {
			alert("Du hast " + (toMuchBombs + 1)  + " Bomben zu viel gesetzt! Es gibt nur maximal " + this.tdID + " Felder. Deswegen wurde deine Bombenanzahl auf " + newBomb + " Bomben herunter gesetzt.");
		}
		// siehe -> Felder Random mit Bomben füllen
		if(!(document.getElementById("bomb"))){
			for(i=0;i<newBomb;i++){
				var randTdID = Math.floor(Math.random() * (this.tdID));
				if(document.getElementById(randTdID) == null){
					i--;
					continue;
				} else {
					var bombID = document.getElementById(randTdID);
					bombID.id =  "bomb";
				}
			}
		}
	} 
}

// zahlen setzen


// timer
var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
    document.getElementById("timer").innerHTML = c;
    c = c + 1;
    t = setTimeout(function(){ timedCount() }, 1000);
}
function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}



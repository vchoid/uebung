///**
// * 
// */
//
//function Raumschiff(schiffsname, schiffsmodell) {
//	this.name = schiffsname;
//	this.modell = schiffsmodell;
//	this.kapitaen = function Person(personName, personVname) {
//		this.pName = personName;
//		this.pVname = personVname;
//	};
//}
//
//var enter = new Raumschiff('Enterprise', 'NCC-1234');
//enter.kapitaen('Kirk', 'James T');
//
//alert(enter.pName);
//
//enter.kapitaen.geschlecht = 'm';
//
//alert(enter.kapitaen.geschlecht);

function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
      
    }
	alert(numberSelected + ", i=" + i);
  }
  return numberSelected;
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function(){
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes))
});
//localStorage.removeItem('mapw');

if (typeof (Storage) != 'undefined' && !('mapw' in localStorage)) {
	loadMPinfo();
} else {
	//alert("MAPW: Daten werden nicht ueberschreiben.");
}
function loadMPinfo(){
	// Store
	localStorage.setItem('mapw', JSON.stringify([ {
		"hashwert" : "",
		"salt" : "",
		"iteration" : 5000,
		"lengthPW": 20,
		"letters": 1,
		"numbers":1,
		"characters":1
	} ]));}

function addHash(hash) {
	// Daten aus localStorage holen
	var masterPW = JSON.parse(localStorage.mapw);

	masterPW[0].hashwert = hash;
	// Daten in den JSON_array schreiben
	localStorage.setItem('mapw', JSON.stringify(masterPW));

}

function deleteHash() {
	localStorage.removeItem('mapw');
	loadMPinfo();
//	
//	// Daten aus localStorage holen
//	var masterPW = JSON.parse(localStorage.mapw);
//
//	masterPW[0].hashwert = "";
//	// Daten in den JSON_array schreiben
//	localStorage.setItem('mapw', JSON.stringify(masterPW));

}
localStorage.removeItem('services');
if (typeof(Storage) != "undefined" && !('services' in localStorage)) {
    // Store
    localStorage.setItem('services', JSON.stringify([{
    	"dienstname": "Facebook",
    	"dienstbeschreibenug": "Facebook is a social utility that connects people with friends...",
    	"url": "https://m.facebook.com/",
    	"logo": "images/service_icons/facebook.png",
    	"namefeld_identifikator": "name",
    	"namefeld": "email",
    	"passfeld_identifikator": "name",
    	"passfeld": "pass",
    	"user": ["anastasiabaron@web.de"], 
    	"lengthpass": 12,
    	"letters": 0,
    	"numbers":0,
    	"characters":0,
    	"iteration":100
},{
	"dienstname": "google",
	"dienstbeschreibenug": "RELAX ist der ideale, zentrale Ort für Ihre Unterrichtsmaterialien. Sie können ...",
	"url": "https://relax.reutlingen-university.de",
	"logo": "images/service_icons/google.png",
	"namefeld_identifikator": "id",
	"namefeld": "login_username",
	"passfeld_identifikator": "id",
	"passfeld": "login_password",
	"user": [],
	"lengthpass": "12",
	"letters": "",
	"numbers":"",
	"characters":"",
	"iteration":"50"
},{
	"dienstname": "hotmail",
	"dienstbeschreibenug": "RELAX ist der ideale, zentrale Ort für Ihre Unterrichtsmaterialien. Sie können ...",
	"url": "https://relax.reutlingen-university.de",
	"logo": "images/service_icons/hotmail.png",
	"namefeld_identifikator": "id",
	"namefeld": "login_username",
	"passfeld_identifikator": "id",
	"passfeld": "login_password",
	"user": [],
	"lengthpass": "12",
	"letters": "",
	"numbers":"",
	"characters":"",
	"iteration":"50"
},{
	"dienstname": "soundcloud",
	"dienstbeschreibenug": "RELAX ist der ideale, zentrale Ort für Ihre Unterrichtsmaterialien. Sie können ...",
	"url": "https://relax.reutlingen-university.de",
	"logo": "images/service_icons/soundcloud.png",
	"namefeld_identifikator": "id",
	"namefeld": "login_username",
	"passfeld_identifikator": "id",
	"passfeld": "login_password",
	"user": [],
	"lengthpass": "12",
	"letters": "",
	"numbers":"",
	"characters":"",
	"iteration":"50"
},{
	"dienstname": "web",
	"dienstbeschreibenug": "RELAX ist der ideale, zentrale Ort für Ihre Unterrichtsmaterialien. Sie können ...",
	"url": "https://relax.reutlingen-university.de",
	"logo": "images/service_icons/web.png",
	"namefeld_identifikator": "id",
	"namefeld": "login_username",
	"passfeld_identifikator": "id",
	"passfeld": "login_password",
	"user": [],
	"lengthpass": "12",
	"letters": "",
	"numbers":"",
	"characters":"",
	"iteration":"50"
},{
	"dienstname": "Relax",
	"dienstbeschreibenug": "RELAX ist der ideale, zentrale Ort für Ihre Unterrichtsmaterialien. Sie können ...",
	"url": "https://relax.reutlingen-university.de",
	"logo": "images/service_icons/relax.png",
	"namefeld_identifikator": "id",
	"namefeld": "login_username",
	"passfeld_identifikator": "id",
	"passfeld": "login_password",
	"user": [],
	"lengthpass": "12",
	"letters": "",
	"numbers":"",
	"characters":"",
	"iteration":"50"
},{
	"dienstname": "xing",
	"dienstbeschreibenug": "RELAX ist der ideale, zentrale Ort für Ihre Unterrichtsmaterialien. Sie können ...",
	"url": "https://relax.reutlingen-university.de",
	"logo": "images/service_icons/xing.png",
	"namefeld_identifikator": "id",
	"namefeld": "login_username",
	"passfeld_identifikator": "id",
	"passfeld": "login_password",
	"user": [],
	"lengthpass": "12",
	"letters": "",
	"numbers":"",
	"characters":"",
	"iteration":"50"
}
]));
} else {
    alert("SERVICES: Daten werden nicht ueberschreiben.");
}

			function addUser(service, userToAdd) {
				//Daten aus localStorage holen
				var dienste = JSON.parse(localStorage.services);

				//iterieren ueber JSON_array: key := 0, 1, ..., n
				for (key in dienste) {
					if (service === dienste[key].dienstname) {
						//ein Wert in user-Feld anhaengen
						dienste[key].user.push(userToAdd);
					}
				}
				//Daten in den JSON_array schreiben
				localStorage.setItem('services', JSON.stringify(dienste));
			}

			function deleteUser(service, userToDelete) {
				//Daten aus localStorage holen
				var dienste = JSON.parse(localStorage.services);
				var index = -1;

				//iterieren ueber JSON_array: key := 0, 1, ..., n
				for (key in dienste) {
					if (service === dienste[key].dienstname) {

						index = dienste[key].user.indexOf(userToDelete);
						if (index >= 0) {
							alert("DELETE: " + dienste[key].user[index]);
							dienste[key].user.splice(index, index);
						}
					}

				}
				//Daten in den JSON_array schreiben
				localStorage.setItem('services', JSON.stringify(dienste));
			}

			
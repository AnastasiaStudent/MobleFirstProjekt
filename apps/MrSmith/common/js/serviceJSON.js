//localStorage.removeItem('services');
if (typeof (Storage) != "undefined" && !('services' in localStorage)) {
	// Store
	localStorage
			.setItem(
					'services',
					JSON
							.stringify([
									{
										"dienstname" : "Facebook",
										"dienstbeschreibenug" : "Facebook is a social utility that connects people with friends.",
										"url" : "https://m.facebook.com/",
										"logo" : "images/service_icons/facebook.png",
										"namefeld_identifikator" : "name",
										"namefeld" : "email",
										"passfeld_identifikator" : "name",
										"passfeld" : "pass",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									},
									{
										"dienstname" : "Google",
										"dienstbeschreibenug" : "It is the most-used search engine on the World Wide Web.",
										"url" : "https://accounts.google.com/ServiceLogin?hl=de&continue=https://www.google.de/",
										"logo" : "images/service_icons/google.png",
										"namefeld_identifikator" : "id",
										"namefeld" : "Email",
										"passfeld_identifikator" : "id",
										"passfeld" : "Passwd",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									},
									{
										"dienstname" : "Hotmail",
										"dienstbeschreibenug" : "Hotmail is a free e-mail service provided by Microsoft.",
										"url" : "https://mail.live.com/m/",
										"logo" : "images/service_icons/hotmail.png",
										"namefeld_identifikator" : "id",
										"namefeld" : "i0116",
										"passfeld_identifikator" : "id",
										"passfeld" : "i0118",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									},
									{
										"dienstname" : "Relax",
										"dienstbeschreibenug" : "RELAX ist der ideale, zentrale Ort für Ihre Unterrichtsmaterialien.",
										"url" : "https://relax.reutlingen-university.de",
										"logo" : "images/service_icons/relax.png",
										"namefeld_identifikator" : "id",
										"namefeld" : "login_username",
										"passfeld_identifikator" : "id",
										"passfeld" : "login_password",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									},
									{
										"dienstname" : "Soundcloud",
										"dienstbeschreibenug" : "SoundCloud is a Swedish online audio distribution platform based in Berlin, Germany, that enables its users to upload, record, promote, and share their originally-created sounds.",
										"url" : "https://soundcloud.com/login",
										"logo" : "images/service_icons/soundcloud.png",
										"namefeld_identifikator" : "id",
										"namefeld" : "site-username",
										"passfeld_identifikator" : "id",
										"passfeld" : "site-password",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									},
									{
										"dienstname" : "WEB.DE",
										"dienstbeschreibenug" : "WEB.DE ist ein deutsches Internetportal.",
										"url" : "https://mm.web.de/login",
										"logo" : "images/service_icons/web.png",
										"namefeld_identifikator" : "id",
										"namefeld" : "username",
										"passfeld_identifikator" : "id",
										"passfeld" : "password",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									},
								
									{
										"dienstname" : "Xing",
										"dienstbeschreibenug" : "XING is a social software platform for enabling a small-world network for professionals.",
										"url" : "https://touch.xing.com/session/new.",
										"logo" : "images/service_icons/xing.png",
										"namefeld_identifikator" : "id",
										"namefeld" : "user_login_email_or_username",
										"passfeld_identifikator" : "id",
										"passfeld" : "user_login_password",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									} ]));
} else {
	alert("SERVICES: Daten werden nicht ueberschreiben.");
}

function addUser(index, userToAdd) {
	// Daten aus localStorage holen
	var dienste = JSON.parse(localStorage.services);

	// ein Wert in user-Feld anhaengen
	dienste[index].user.push(userToAdd);

	// Daten in den JSON_array schreiben
	localStorage.setItem('services', JSON.stringify(dienste));
}

function deleteUser(indexService, indexUser) {
	// Daten aus localStorage holen
	var dienste = JSON.parse(localStorage.services);

	alert("DELETE: " + dienste[indexService].user[indexUser] + " : " + indexUser);
	dienste[indexService].user.splice(indexUser, 1);

	// Daten in den JSON_array schreiben
	localStorage.setItem('services', JSON.stringify(dienste));
}

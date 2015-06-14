//localStorage.removeItem('services');
if (typeof (Storage) != "undefined" && !('services' in localStorage)) {
loadService();}
function loadService(){
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
										"dienstbeschreibenug" : "Google is the most-used search engine on the World Wide Web.",
										"url" : "https://accounts.google.com/ServiceLogin?hl=de&continue=https://www.google.de/",
										"logo" : "images/service_icons/google.png",
										"namefeld_identifikator" : "id",
										"namefeld" : "Email",
										"passfeld_identifikator" : "type",
										"passfeld" : "password",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									},{
										"dienstname" : "Habbo",
										"dienstbeschreibenug" : "Habbo (previously known as Habbo Hotel) is the world's largest Finnish social networking service and online community aimed at teenagers.",
										"url" : "https://www.habbo.de",
										"logo" : "images/service_icons/habbo.gif",
										"namefeld_identifikator" : "id",
										"namefeld" : "credentials-email",
										"passfeld_identifikator" : "id",
										"passfeld" : "credentials-password",
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
										"dienstname" : "Instagram",
										"dienstbeschreibenug" : "Instagram is an online mobile photo-sharing, video-sharing and social networking service that enables its users to take pictures and videos, and share them on a variety of social networking platforms, such as Facebook, Twitter, Tumblr and Flickr.",
										"url" : "https://instagram.com/accounts/login/?force_classic_login",
										"logo" : "images/service_icons/instagram.png",
										"namefeld_identifikator" : "id",
										"namefeld" : "id_username",
										"passfeld_identifikator" : "id",
										"passfeld" : "id_password",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									},{
										"dienstname" : "Intranet Hochschule Reutlingen",
										"dienstbeschreibenug" : "Das Intranet der Hochschule Reutlingen",
										"url" : "https://intranet.reutlingen-university.de/login/",
										"logo" : "images/service_icons/ihr.jpg",
										"namefeld_identifikator" : "id",
										"namefeld" : "user",
										"passfeld_identifikator" : "id",
										"passfeld" : "pass",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									},{
										"dienstname" : "LinkedIn",
										"dienstbeschreibenug" : "LinkedIn is a business-oriented social networking service.",
										"url" : "https://www.linkedin.com/uas/login",
										"logo" : "images/service_icons/linkedin.png",
										"namefeld_identifikator" : "id",
										"namefeld" : "session_key-login",
										"passfeld_identifikator" : "id",
										"passfeld" : "session_password-login",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									},{
										"dienstname" : "Odnoklassniki",
										"dienstbeschreibenug" : "Odnoklassniki (Russian: Одноклассники - Classmates) is a social network service for classmates and old friends.",
										"url" : "http://m.ok.ru/",
										"logo" : "images/service_icons/ok.png",
										"namefeld_identifikator" : "id",
										"namefeld" : "field_login",
										"passfeld_identifikator" : "id",
										"passfeld" : "field_password",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									},{
										"dienstname" : "Reddit",
										"dienstbeschreibenug" : "Reddit stylized as reddit, is an entertainment, social networking, and news website where registered community members can submit content, such as text posts or direct links, making it essentially an online bulletin board system.",
										"url" : "https://www.reddit.com/r/mobile/",
										"logo" : "images/service_icons/reddit.jpg",
										"namefeld_identifikator" : "name",
										"namefeld" : "user",
										"passfeld_identifikator" : "name",
										"passfeld" : "passwd",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									},{
										"dienstname" : "Relax",
										"dienstbeschreibenug" : "RELAX ist der ideale, zentrale Ort für Ihre Unterrichtsmaterialien.",
										"url" : "https://relax.reutlingen-university.de/login/index.php",
										"logo" : "images/service_icons/relax.png",
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
									},{
										"dienstname" : "Tumblr",
										"dienstbeschreibenug" : "Tumblr (stylized in its logo as tumblr.) is a microblogging platform and social networking website founded by David Karp and owned by Yahoo! Inc.",
										"url" : "https://www.tumblr.com/login",
										"logo" : "images/service_icons/tumblr.png",
										"namefeld_identifikator" : "id",
										"namefeld" : "signup_email",
										"passfeld_identifikator" : "id",
										"passfeld" : "signup_password",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									},{
										"dienstname" : "Twitter",
										"dienstbeschreibenug" : "Twitter is an online social networking service that enables users to send and read short 140-character messages called 'tweets'.",
										"url" : "https://twitter.com/login?lang=de",
										"logo" : "images/service_icons/twitter.png",
										"namefeld_identifikator" : "name",
										"namefeld" : "session[username_or_email]",
										"passfeld_identifikator" : "name",
										"passfeld" : "session[password]",
										"user" : [],
										"lengthpass" : 12,
										"letters" : 1,
										"numbers" : 1,
										"characters" : 1,
										"iteration" : 5000
									},{
										"dienstname" : "VKontakte",
										"dienstbeschreibenug" : "VK (originally VKontakte, Russian: ВКонтакте, literally 'in touch') is the largest Russian social network in Europe.",
										"url" : "https://m.vk.com/",
										"logo" : "images/service_icons/vk.png",
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
									},{
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
									},{
										"dienstname" : "Xing",
										"dienstbeschreibenug" : "XING is a social software platform for enabling a small-world network for professionals.",
										"url" : "https://touch.xing.com/session/new",
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
									} 
									]));
}

function addUser(index, userToAdd) {
	// Daten aus localStorage holen
	var dienste = JSON.parse(localStorage.services);

	// ein Wert in user-Feld anhaengen
	dienste[index].user.push(userToAdd);

	// Daten in den JSON_array schreiben
	localStorage.setItem('services', JSON.stringify(dienste));
}
function checkUser(userName){
	var dienste = JSON.parse(localStorage.services);
	var dienst =dienste[indexGlobal];
	
x=0;
do {
if(userName===dienst.user[x]){
	x=dienst.user.length;
		return false;
	}
else{
	 x = x + 1;
}
    
     
  } while (x < dienst.user.length);
return true;
}
function deleteUser(indexService, indexUser) {
	// Daten aus localStorage holen
	var dienste = JSON.parse(localStorage.services);

	var infoText=dienste[indexService].user[indexUser] +" was deleted.";
	WL.SimpleDialog.show(
			"Information", infoText, 
			[{text: "OK", handler: function() {
				WL.Logger.debug("account deleted");}
			}]
			) ;
	dienste[indexService].user.splice(indexUser, 1);

	// Daten in den JSON_array schreiben
	localStorage.setItem('services', JSON.stringify(dienste));
}

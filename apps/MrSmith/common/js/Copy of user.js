currentPage = {};
var InAppBrowserReference;
var dienste;
var users;

currentPage.init = function(){
	
	$("#pageDescr").html('User');
	WL.Logger.debug('User :: init');
	
	dienste = JSON.parse(localStorage.getItem('services'));
	users=dienste[indexGlobal].user;
	$.each(users, function(i, field) {
	$('#userList').append('<a onclick="currentPage.dienstladen(' + i + ')" class="item item-avatar listColor " href="#"> <img src="' + dienste[indexGlobal].logo +'"> <h2>'+ field +' </h2> <h3>' + dienste[indexGlobal].dienstbeschreibenug +'</h3> </a>');
		});	
	
};


currentPage.dienstladen = function(userIndex) {
	WL.Logger.debug("full :: Dienstladen" + " - " + userIndex);
	userIndexGlobal=userIndex;
	// Wait for device API libraries to load
	//document.addEventListener("deviceready", openInAppBrowser(dienstName),false);
	openInAppBrowser();
};

function openInAppBrowser() {
	InAppBrowserReference = window.open(dienste[indexGlobal].url, '_blank', 'clearcache=yes','clearsessioncache=yes','closebuttoncaption=close');
//	InAppBrowserReference = window.open(dienste[indexGlobal].url, '_blank', 'clearcache=yes, clearsessioncache=yes, closebuttoncaption=close');
	
	InAppBrowserReference.addEventListener('loaderror', closeInAppBrowserErr);
	InAppBrowserReference.addEventListener('loadstop', scriptEinfuegen);
	InAppBrowserReference.addEventListener('exit', closeInAppBrowser);
	
};
function scriptEinfuegen() {
	var feldEmail;
	var feldPass;
	var user;
	var pass;
	if(dienste[indexGlobal].namefeld_identifikator=="id"){
		feldEmail = "document.getElementById("+"'"+dienste[indexGlobal].namefeld+"').value=";
	}
	else if (dienste[indexGlobal].namefeld_identifikator=="name"){
		feldEmail = "document.getElementsByName('"+dienste[indexGlobal].namefeld+"')[0].value=";
	}
	else {
		
	}

	if(dienste[indexGlobal].passfeld_identifikator=="id"){
		feldPass = "document.getElementById("+"'"+dienste[indexGlobal].passfeld+"').value=";
	}
	else if (dienste[indexGlobal].namefeld_identifikator=="name"){
		feldPass = "document.getElementsByName('"+dienste[indexGlobal].passfeld+"')[0].value=";
	}
	else {
		
	}
	
	user = users[userIndexGlobal];
	

	var iteration = JSON.parse(localStorage.services)[0].iteration;
	var length = JSON.parse(localStorage.services)[0].lengthpass;
	var numbers = JSON.parse(localStorage.services)[0].numbers;
	var letters = JSON.parse(localStorage.services)[0].letters;
	var characters = JSON.parse(localStorage.services)[0].characters;

var mapw = getMApw();
var pw = mapw.concat(user);

var hashJSON = JSON.parse(localStorage.mapw)[0].hashwert;
alert(pw);
var mypbkdf2 = new PBKDF2(pw, hashJSON, iteration, length, numbers, characters, letters);
var result_callback = function(passGen) {
pass=passGen;
alert(pass);
var codeText = feldEmail + "'" + email + "'; " + feldPass + "'" + pass
+ "'; ";
alert(codeText);
InAppBrowserReference.executeScript({
code : codeText
}, function() {
alert(pass);
	 
});

};

mypbkdf2.deriveKey(result_callback);

//InAppBrowserReference.removeEventListener('loadstop', scriptEinfuegen);

};
function closeInAppBrowserErr(event) {
	if (event.url.match("/close")) {
		InAppBrowserReference.close();
	}
};

function closeInAppBrowser(event) {
	
	InAppBrowserReference
			.removeEventListener('loaderror', closeInAppBrowserErr);
	InAppBrowserReference.removeEventListener('loadstop', scriptEinfuegen);
	InAppBrowserReference.removeEventListener('exit', closeInAppBrowser);
	InAppBrowserReference.close();
}

currentPage.loadPage = function(pageName){
	WL.Logger.debug("Full :: loadPage :: pageName: " + pageName);
	pagesHistory.push("full");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


currentPage.back = function(){
	WL.Logger.debug("Full :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

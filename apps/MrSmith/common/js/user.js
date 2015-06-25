currentPage = {};
var InAppBrowserReference;
var dienste;
var users;
var codeText;

currentPage.init = function(){
	
	$("#pageDescr").html('User');
	WL.Logger.debug('User :: init');
	$("#back").css("visibility", "visible");
	dienste = JSON.parse(localStorage.getItem('services'));
	users=dienste[indexGlobal].user;
	$.each(users, function(i, field) {
	$('#userList').append('<a onclick="currentPage.dienstladen(' + i + ')" class="item item-avatar listColor " href="#"> <img src="' + dienste[indexGlobal].logo +'"> <h2>'+ field +' </h2> <h3>' + dienste[indexGlobal].dienstbeschreibenug +'</h3> </a>');
		});	
	
};


currentPage.dienstladen = function(userIndex) {
	wait();
	WL.Logger.debug("full :: Dienstladen" + " - " + userIndex);
//	$("#userList a").attr("onclick", "");
//	$("#userList").css("visibility", "hidden");	
//	$(this).css("visibility", "hidden");
	userIndexGlobal=userIndex;
	
	// Wait for device API libraries to load
	//document.addEventListener("deviceready", openInAppBrowser(dienstName),false);
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
//	else if (dienste[indexGlobal].namefeld_identifikator=="type"){
//		feldEmail ="$('"+dienste[indexGlobal].namefeld+":first').val(";
//	}
	else {
		
	}

	if(dienste[indexGlobal].passfeld_identifikator=="id"){
		feldPass = "document.getElementById("+"'"+dienste[indexGlobal].passfeld+"').value=";
	}
	else if (dienste[indexGlobal].passfeld_identifikator=="name"){
		feldPass = "document.getElementsByName('"+dienste[indexGlobal].passfeld+"')[0].value=";
	}
	else if (dienste[indexGlobal].passfeld_identifikator=="type"){
//		feldPass="var inputs = document.getElementsByTagName('input'); for(var i = 0; i < inputs.length; i++) { if(inputs[i].type.toLowerCase() == 'password') {inputs[i].value='Y6Y~YQY8Y$YD';}};";
		feldPass="var inputs = document.getElementsByTagName('input'); for(var i = 0; i < inputs.length; i++) { if(inputs[i].type.toLowerCase() == 'password') {inputs[i].value='";
		
	}
	else {
		
	}
	
	user = users[userIndexGlobal];
	

	var iteration = dienste[indexGlobal].iteration;
	var length = dienste[indexGlobal].lengthpass;
	var numbers = dienste[indexGlobal].numbers;
	var letters = dienste[indexGlobal].letters;
	var characters = dienste[indexGlobal].characters;
var mapw = getMApw();
var input = mapw.concat(user,dienste[indexGlobal].dienstname);
var hashJSON = JSON.parse(localStorage.mapw)[0].hashwert;
var salt= hashJSON;
var mypbkdf2 = new PBKDF2(input, salt, iteration, length, numbers, characters, letters);
var result_callback = function(passGen) {
pass=passGen;
if(dienste[indexGlobal].passfeld_identifikator=="type"){
	codeText = feldEmail + "'" + user + "'; " + feldPass +pass+"';}};";
}
else{
codeText = feldEmail + "'" + user + "'; " + feldPass + "'" + pass
+ "'; ";
}

wait();
openInAppBrowser();
};

mypbkdf2.deriveKey(result_callback);

//InAppBrowserReference.removeEventListener('loadstop', scriptEinfuegen);

	
	
};




function openInAppBrowser() {
	InAppBrowserReference = window.open(dienste[indexGlobal].url, '_blank', 'closebuttoncaption=close,clearcache=yes,clearsessioncache=yes,');
//	InAppBrowserReference = window.open(dienste[indexGlobal].url, '_blank', 'clearcache=yes, clearsessioncache=yes, closebuttoncaption=close');
	
	InAppBrowserReference.addEventListener('loaderror', closeInAppBrowserErr);
	InAppBrowserReference.addEventListener('loadstop', scriptEinfuegen);
	InAppBrowserReference.addEventListener('exit', closeInAppBrowser);
	
};
function scriptEinfuegen() {
	InAppBrowserReference.executeScript({
		//code : "$(document).ready(function(){$(':password').val('q7q)qUf1f!fX');});"
		//code:  "for(i=0; i<document.getElementsByTagName('input').length; i++){ if (document.getElementsByTagName('input')[i].placeholder=='Password'){ alert(document.getElementsByTagName('input')[i].name.length); } else {}};"
		//code: "document.getElementsByName('password')[0].value='adssadfffdsccwewc';"
		code : codeText
		}, function() {
		//alert(codeText);
			 
		});
};
//function scriptEinfuegen() {
//	InAppBrowserReference.executeScript({
//		 file: "http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"
////	alert("geladen");
//		        //webURL works fine with 'file'
//		}, function() {
//			alert("geladen");
//		$(document).ready(function(){
//			$('#Email').val('q7q)qUf1f!fX');
//			
//		});
//			 
//		});
//};


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

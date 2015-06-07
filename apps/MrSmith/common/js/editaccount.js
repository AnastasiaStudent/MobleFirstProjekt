currentPage = {};
var dienst;
var user;
currentPage.init = function(){
	WL.Logger.debug("Edit Account :: init");
	$("#pageDescr").html('Edit account');
//einfuegen hier
	user = JSON.parse(localStorage.services)[indexGlobal].user[userIndexGlobal];
	dienst = JSON.parse(localStorage.getItem('services'))[indexGlobal];
	$('#serivceDiv').append('<a class=" item-avatar listColor "  > <img src="'+dienst.logo+'"> <h2>'+ dienst.dienstname +'</h2><h3>'+dienst.dienstbeschreibenug+'</h3> </a>');
	
//	$('#serviceLogo').append('<a> <img src="'+dienst.logo+'"> </a>')
//	$('#serivceDiv').append('<a > <h2>'+ dienst.dienstname +'</h2><h3>'+dienst.dienstbeschreibenug+'</h3> </a>');

	$('#userName').append('<a>'+ user + '</a>')
	
//	$('#serivceDiv').append('<a class="item item-avatar listColor"> <img src="'+dienst.logo+'"> <h2>'+ dienst.dienstname +'</h2><h3>'+dienst.dienstbeschreibenug+'</h3> </a>');
	

};

currentPage.loadPage = function(pageName){
	WL.Logger.debug("Edit account :: loadPage :: pageName: " + pageName);
	pagesHistory.push("editaccount");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

function editDelete() {
	var x;
	if (confirm("Are you sure?") == true) {
		x = "done";
		//Account löschen
		deleteUser(indexGlobal, userIndexGlobal);
		currentPage.loadPage('mngt');
	} else {
		x = "cancelled";
	}
	//document.getElementById("demo").innerHTML = x;
}

function showPw() {
	wait();
	var hashJSON = JSON.parse(localStorage.mapw)[0].hashwert;
	var iteration = dienst.iteration;
	var length = dienst.lengthpass;
	var numbers = dienst.numbers;
	var letters = dienst.letters;
	var characters = dienst.characters;
	var mapw = getMApw();
	var input = mapw.concat(user);
	var salt= hashJSON.concat(dienste[indexGlobal].dienstname);
	var mypbkdf2 = new PBKDF2(input, salt, iteration, length, numbers, characters,
			letters);

	var result_callback = function(key) {
		// alert("YOUR PW : " + key );
		document.getElementById('showPW').innerHTML=key;
		document.getElementById('showPW').style.visibility="visible";
		wait();
	};
	mypbkdf2.deriveKey(result_callback);
	
}

currentPage.back = function(){
	WL.Logger.debug("Edit account :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


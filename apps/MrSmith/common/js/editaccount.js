currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("Edit Account :: init");
	$("#pageDescr").html('Edit account');
//einfuegen hier
	var user = JSON.parse(localStorage.services)[indexGlobal].user[userIndexGlobal];
	var dienste = JSON.parse(localStorage.getItem('services'))[indexGlobal];
	$('#serivceDiv').append('<a> <img src="'+dienste.logo+'"> <h2>'+ dienste.dienstname +'</h2><h3>'+dienste.dienstbeschreibenug+'</h3> </a>');
	
//	$('#serviceLogo').append('<a> <img src="'+dienste.logo+'"> </a>')
//	$('#serivceDiv').append('<a > <h2>'+ dienste.dienstname +'</h2><h3>'+dienste.dienstbeschreibenug+'</h3> </a>');

	$('#userName').append('<a>'+ user + '</a>')
	
//	$('#serivceDiv').append('<a class="item item-avatar listColor"> <img src="'+dienste.logo+'"> <h2>'+ dienste.dienstname +'</h2><h3>'+dienste.dienstbeschreibenug+'</h3> </a>');
	

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
	var salt = JSON.parse(localStorage.mapw)[0].hashwert;
	var iteration = JSON.parse(localStorage.services)[indexGlobal].iteration;
	var length = JSON.parse(localStorage.services)[indexGlobal].lengthpass;
	var numbers = JSON.parse(localStorage.services)[indexGlobal].numbers;
	var letters = JSON.parse(localStorage.services)[indexGlobal].letters;
	var characters = JSON.parse(localStorage.services)[indexGlobal].characters;
	
	var user = JSON.parse(localStorage.services)[indexGlobal].user[userIndexGlobal];
	var mapw = getMApw();
	var pw = mapw.concat(user);
	
	var mypbkdf2 = new PBKDF2(pw, salt, iteration, length, numbers, characters,
			letters);

	var result_callback = function(key) {
		 alert("YOUR PW : " + key );
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


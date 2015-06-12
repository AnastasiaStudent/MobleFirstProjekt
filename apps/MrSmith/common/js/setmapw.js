currentPage = {};

currentPage.init = function() {
	WL.Logger.debug("setmapw :: init");
	//$("#header").css("visibility", "hidden");
//	$("#pageDescr").html('Initialization');
	$("#back").css("visibility", "hidden");
	
	$("#pw").focus();
	//document.getElementById('pw').focus();
};

currentPage.loadPage = function(pageName) {
	WL.Logger.debug("setmapw :: loadPage :: pageName: " + pageName);
	pagesHistory.push("setmapw");
	$("#header").css("visibility", "visible");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function() {
			$.getScript(path + "js/" + pageName + ".js", function() {
				if (currentPage.init) {
					currentPage.init();
				}
			});
		});
};

currentPage.mapwSetzen = function (){
	WL.Logger.debug("Setmapw :: MaPW setzen");
	
	var hashJSON = JSON.parse(localStorage.mapw)[0].hashwert;
	var iteration = JSON.parse(localStorage.mapw)[0].iteration;
	var length = JSON.parse(localStorage.mapw)[0].lengthPW;
	var numbers = JSON.parse(localStorage.mapw)[0].numbers;
	var letters = JSON.parse(localStorage.mapw)[0].letters;
	var characters = JSON.parse(localStorage.mapw)[0].characters;
	var pw = document.getElementById("pw").value;
	var cpw = document.getElementById("cpw").value;
	
	

if (pw === cpw && pw != "" && pw.length >= 12) {
	var mypbkdf2 = new PBKDF2(pw, "", iteration, length,numbers,characters,letters);
	var result_callback = function(key) {
		addHash(key);
};
	setMApw(pw);	
	mypbkdf2.deriveKey(result_callback);
	currentPage.loadPage('mngt');
} else if (pw !== cpw ){

alert("Your entries do not match exactly. Please try again.");

}else if (pw == "" ){

	alert("Please enter your new password twice.");

	}
else if (pw.length < 12 ){
	alert("Your password must be at least 12 characters long. Please try another.");
	}

};
	

currentPage.back = function() {
	WL.Logger.debug("Setmapw :: back");
	var pageName = pagesHistory.pop();
	$("#header").css("visibility", "visible");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function() {
		$.getScript(path + "js/" + pageName + ".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


currentPage = {};

currentPage.init = function() {
	WL.Logger.debug("setmapw :: init");
	$("#pageDescr").html('Initialization');

};

currentPage.loadPage = function(pageName) {
	WL.Logger.debug("setmapw :: loadPage :: pageName: " + pageName);
	pagesHistory.push("setmapw");
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
	
	var mypbkdf2 = new PBKDF2(pw, "", iteration, length,numbers,characters,letters);
	
	var result_callback = function(key) {
		
		addHash(key);
};

if (pw === cpw && pw != "" && pw.length >= 12) {
	setMApw(pw);	
	currentPage.loadPage('mngt');

mypbkdf2.deriveKey(result_callback);
} else if (pw !== cpw ){

alert("ungleich");

}else if (pw == "" ){

	alert("muss feld");

	}
else if (pw.length < 12 ){

	alert("zu kurz");

	}

};
	

currentPage.back = function() {
	WL.Logger.debug("Setmapw :: back");
	var pageName = pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function() {
		$.getScript(path + "js/" + pageName + ".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


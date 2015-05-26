currentPage = {};
var servicePW;
var user;

currentPage.init = function() {
	WL.Logger.debug("NewAccount :: init");
	$("#pageDescr").html('New account');
	var dienste = JSON.parse(localStorage.getItem('services'));
	var selectList = document.getElementById("selectServices")
	$.each(dienste, function(i, value) {
		// alert(value.dienstname + " : " + i);
		var option = document.createElement("option");
		option.value = i;
		option.text = value.dienstname;
		selectList.appendChild(option);
	});

};

currentPage.loadPage = function(pageName) {
	WL.Logger.debug("NewAccount :: loadPage :: pageName: " + pageName);
	pagesHistory.push("newaccount");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function() {
		$.getScript(path + "js/" + pageName + ".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

addAcc = function() {
	//selectBox
	indexGlobal = document.getElementById("selectServices").value;
	var m_value = document.getElementById("selectServices").value;
	var m_option = document.getElementById("selectServices").options;
	//PW berechnen
	var salt = JSON.parse(localStorage.mapw)[0].hashwert;
	var iteration = JSON.parse(localStorage.services)[indexGlobal].iteration;
	var length = JSON.parse(localStorage.services)[indexGlobal].lengthpass;
	var numbers = JSON.parse(localStorage.services)[indexGlobal].numbers;
	var letters = JSON.parse(localStorage.services)[indexGlobal].letters;
	var characters = JSON.parse(localStorage.services)[indexGlobal].characters;
	//Eingabe: user
	user = document.getElementById("userName").value;
	var mapw = getMApw();
	var pw = mapw.concat(user);
	
	var mypbkdf2 = new PBKDF2(pw, salt, iteration, length, numbers, characters,
			letters);

	var result_callback = function(key) {
		 servicePW = key;
	//	 alert("passwordservice: " + key);
		 currentPage.loadPage("setpw");
	};
	//alert("Indexglobal: " + indexGlobal +  " - pw: " + pw + " - " + iteration);
	mypbkdf2.deriveKey(result_callback);
	

}

currentPage.back = function() {
	WL.Logger.debug("NewAccount :: back");
	var pageName = pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function() {
		$.getScript(path + "js/" + pageName + ".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

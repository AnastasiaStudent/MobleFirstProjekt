currentPage = {};
var servicePW;
var dienste;
var user;

currentPage.init = function() {
	WL.Logger.debug("NewAccount :: init");
	$("#pageDescr").html('New account');
	$("#back").css("visibility", "visible");
	dienste = JSON.parse(localStorage.getItem('services'));
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
	if (document.getElementById("selectServices").value == "Select prefered service:"){
		//alert("Please select your service.");
		WL.SimpleDialog.show(
				"Information", "Please select your service.", 
				[{text: "OK", handler: function() {WL.Logger.debug("Service was not selected"); }
				}]
				) ;
	}
	else if(document.getElementById("userName").value.length==0){
		//alert("Please enter your username.");
		WL.SimpleDialog.show(
				"Information", "Please enter your username.", 
				[{text: "OK", handler: function() {WL.Logger.debug("No username"); }
				}]
				) ;
	}
	else{
	wait();
	//selectBox
	indexGlobal = document.getElementById("selectServices").value;
	//PW berechnen
	var hashJSON = JSON.parse(localStorage.mapw)[0].hashwert;
	var iteration = dienste[indexGlobal].iteration;
	var length = dienste[indexGlobal].lengthpass;
	var numbers = dienste[indexGlobal].numbers;
	var letters = dienste[indexGlobal].letters;
	var characters = dienste[indexGlobal].characters;
	var salt= hashJSON;
	//Eingabe: user
	user = document.getElementById("userName").value;
	var mapw = getMApw();
	var input = mapw.concat(user,dienste[indexGlobal].dienstname);
	var mypbkdf2 = new PBKDF2(input, salt, iteration, length, numbers, characters,
			letters);

	var result_callback = function(key) {
		 servicePW = key;
	//	 alert("passwordservice: " + key);
		 currentPage.loadPage("setpw");
		 wait();
	};
	//alert("Indexglobal: " + indexGlobal +  " - pw: " + pw + " - " + iteration);
	mypbkdf2.deriveKey(result_callback);
	
	}
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

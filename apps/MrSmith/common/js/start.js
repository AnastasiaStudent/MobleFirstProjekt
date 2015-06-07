currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("Start :: init");
	$("#pageDescr").html('Start');
	$("#plus_kreuz").addClass("button ion-close-circled button-clear");
	$("#plus_kreuz").css("visibility", "visible");
	$("#plus_kreuz").attr("onclick", "delAll()")
	//document.getElementById("mapw").value="password1234";
};

currentPage.loadPage = function(pageName){
	$("#plus_kreuz").removeClass("button ion-close-circled button-clear");
	$("#plus_kreuz").css("visibility", "hidden");
	$("#plus_kreuz").attr("onclick", "")
	WL.Logger.debug("Start :: loadPage :: pageName: " + pageName);
	pagesHistory.push("start");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};
currentPage.validate  = function(){
	wait();
	var hashJSON = JSON.parse(localStorage.mapw)[0].hashwert;
	var iteration = JSON.parse(localStorage.mapw)[0].iteration;
	var length = JSON.parse(localStorage.mapw)[0].lengthPW;
	var numbers = JSON.parse(localStorage.mapw)[0].numbers;
	var letters = JSON.parse(localStorage.mapw)[0].letters;
	var characters = JSON.parse(localStorage.mapw)[0].characters;
	var masterPW = document.getElementById("mapw").value;
	var pageName = "full";

	var mypbkdf2 = new PBKDF2(masterPW, "", iteration, length,numbers,characters,letters);
	var result_callback = function(hashNew) {
		if (hashJSON === hashNew) {
			setMApw(masterPW);
			WL.Logger.debug("Start :: loadPage :: pageName: "
					+ pageName);
			currentPage.loadPage('full');
		} else {
			alert("Your password is not correct!");
		}
	wait();
	};

	mypbkdf2.deriveKey(result_callback);


};

	
function delAll() {
	if (confirm("Are you sure?") == true) {
		deleteHash();
		loadService();
	
		//Daten aus localStorage holen
//		var dienste = JSON.parse(localStorage.services);
//		var lengthUser;
//
		//iterieren ueber JSON_array: key := 0, 1, ..., n
//		for (key in dienste) {
//			 lengthUser = dienste[key].user.length;
//					//alert(lengthUser + " : DELETE: " + dienste[key].user);
//					dienste[key].user.splice(0, lengthUser);
//				
//		}
//		//Daten in den JSON_array schreiben
//		localStorage.setItem('services', JSON.stringify(dienste));
		
		currentPage.loadPage('setmapw');
		
	} 

}

currentPage.back = function(){
	$("#plus_kreuz").removeClass("button ion-close-circled button-clear");
	$("#plus_kreuz").css("visibility", "hidden");
	$("#plus_kreuz").attr("onclick", "")
	WL.Logger.debug("Start :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


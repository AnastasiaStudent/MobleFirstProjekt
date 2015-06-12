currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("Setpw :: init");
	$("#pageDescr").html('Finished');
	var pwField = document.getElementById("servicePW");
	pwField.value = servicePW;
	$("#back").css("visibility", "visible");
};

saveInServices = function(){
	if (checkUser(user)){
	addUser(indexGlobal, user);
	currentPage.loadPage("mngt");
	}
	else {
		alert("Error... This user name already exists for this service");
	}
}

currentPage.loadPage = function(pageName){
	WL.Logger.debug("Setpw :: loadPage :: pageName: " + pageName);
	pagesHistory.push("setpw");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


currentPage.back = function(){
	WL.Logger.debug("Setpw :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


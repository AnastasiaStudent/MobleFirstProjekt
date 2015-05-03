currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("Setpw :: init");
	$("#pageDescr").html('Finished');
};

currentPage.loadPage = function(pageName){
	$("#plus").css("visibility", "hidden");
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


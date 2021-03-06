currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("About us :: init");
	$("#pageDescr").html('About us');
	$("#back").css("visibility", "visible");
};

currentPage.loadPage = function(pageName){
	WL.Logger.debug("About the app :: loadPage :: pageName: " + pageName);
	pagesHistory.push("aboutus");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


currentPage.back = function(){
	WL.Logger.debug("About us :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


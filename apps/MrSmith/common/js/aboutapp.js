currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("About App :: init");
	$("#pageDescr").html('About the app');
};

currentPage.loadPage = function(pageName){
	WL.Logger.debug("About the app :: loadPage :: pageName: " + pageName);
	pagesHistory.push("aboutapp");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


currentPage.back = function(){
	WL.Logger.debug("About App :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


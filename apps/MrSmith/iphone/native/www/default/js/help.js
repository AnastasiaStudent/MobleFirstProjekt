
/* JavaScript content from js/help.js in folder common */
currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("Help :: init");
	$("#pageDescr").html('Help');
};

currentPage.loadPage = function(pageName){
	WL.Logger.debug("Help :: loadPage :: pageName: " + pageName);
	pagesHistory.push("help");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


currentPage.back = function(){
	WL.Logger.debug("Help :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("Options :: init");
	$("#pageDescr").html('Options');
};

currentPage.loadPage = function(pageName){
	WL.Logger.debug("Options :: loadPage :: pageName: " + pageName);
	pagesHistory.push("options");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


currentPage.back = function(){
	WL.Logger.debug("Options :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


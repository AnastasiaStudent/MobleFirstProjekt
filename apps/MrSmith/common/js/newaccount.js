currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("NewAccount :: init");
	$("#pageDescr").html('New account');
};

currentPage.loadPage = function(pageName){
	WL.Logger.debug("NewAccount :: loadPage :: pageName: " + pageName);
	pagesHistory.push("newaccount");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


currentPage.back = function(){
	WL.Logger.debug("NewAccount :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


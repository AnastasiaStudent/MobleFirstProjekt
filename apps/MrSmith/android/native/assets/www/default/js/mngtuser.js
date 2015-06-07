
/* JavaScript content from js/mngtuser.js in folder common */
currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("MngtUser :: init");
	$("#pageDescr").html('Manage User');
};

currentPage.loadPage = function(pageName){
	WL.Logger.debug("MngtUser :: loadPage :: pageName: " + pageName);
	pagesHistory.push("mngtuser");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


currentPage.back = function(){
	WL.Logger.debug("MngtUser :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


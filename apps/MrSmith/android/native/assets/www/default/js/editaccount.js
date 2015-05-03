
/* JavaScript content from js/editaccount.js in folder common */
currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("Edit Account :: init");
	$("#pageDescr").html('Edit account');
};

currentPage.loadPage = function(pageName){
	WL.Logger.debug("Edit account :: loadPage :: pageName: " + pageName);
	pagesHistory.push("editaccount");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


currentPage.back = function(){
	WL.Logger.debug("Edit account :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


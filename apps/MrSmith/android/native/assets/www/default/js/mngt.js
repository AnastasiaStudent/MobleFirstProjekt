
/* JavaScript content from js/mngt.js in folder common */
currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("Mngt :: init");
	$("#pageDescr").html('Manage list');
//$('#plus').show();
	$("#plus").css("visibility", "visible");
};

currentPage.loadPage = function(pageName){
	$("#plus").css("visibility", "hidden");
	WL.Logger.debug("Mngt :: loadPage :: pageName: " + pageName);
	pagesHistory.push("Mngt");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


currentPage.back = function(){
	WL.Logger.debug("Mngt :: back");
	$("#plus").css("visibility", "hidden");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


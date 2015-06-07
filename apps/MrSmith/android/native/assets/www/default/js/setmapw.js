
/* JavaScript content from js/setmapw.js in folder common */
currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("setmapw :: init");
	$("#pageDescr").html('Initialization');
	$( "#footer" ).css( "display", "none" );
};

currentPage.loadPage = function(pageName){
	WL.Logger.debug("setmapw :: loadPage :: pageName: " + pageName);
	pagesHistory.push("setmapw");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

currentPage.back = function(){
	WL.Logger.debug("Setmapw :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};
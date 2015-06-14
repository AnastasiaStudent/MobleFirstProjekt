currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("Options :: init");
	$("#pageDescr").html('Options');
	$("#back").css("visibility", "hidden");
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

function delAll() {
	WL.SimpleDialog.show(
			"Information", "Are you sure?", 
			[{text: "Yes", handler: function() {WL.Logger.debug("reset..."); deleteHash();
			loadService();currentPage.loadPage('setmapw'); }
			},{text: "Cancel", handler: function() {WL.Logger.debug("cancel");}
			}]
			) ;
}

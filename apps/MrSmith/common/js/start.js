currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("Start :: init");
	$("#pageDescr").html('Start');
	//$( "#footer" ).css( "display", "none" );
	$('#footer').hide();
};

currentPage.loadPage = function(pageName){
	WL.Logger.debug("Start :: loadPage :: pageName: " + pageName);
	pagesHistory.push("start");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

function delAll() {
	
	if (confirm("Are you sure?") == true) {
		currentPage.loadPage('setmapw');
	} else {

	}
	
}

currentPage.back = function(){
	WL.Logger.debug("Start :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


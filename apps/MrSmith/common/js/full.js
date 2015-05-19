currentPage = {};
currentPage.init = function(){
	
	$("#pageDescr").html('Full list');
	WL.Logger.debug('Full :: init');
	// Store
//	alert (localStorage.getItem("user"));
//	localStorage.setItem("user", "Baron");
//	alert (localStorage.getItem("user"));
	var dienste = JSON.parse(localStorage.getItem('services'));
	$.each(dienste, function(i, field) {
		if (field.user.length > 0){
	$('#listFull ').append('<a onclick="currentPage.serviceSelect('+ i + ')" class="item item-avatar listColor " href="#"> <img src="' + field.logo +'"> <h2>'+ field.dienstname +' </h2> <h3>' + field.dienstbeschreibenug +'</h3> </a>');
		}});
	
//	$.getJSON("dienste.json", function(result) {
//		$.each(result, function(i, field) {
//			field.dienstname='Erfolg';
//		$('#listFull ').append('<a onclick="currentPage.loadPage(\'user\')" class="item item-avatar listColor " href="#"> <img src="' + field.logo +'"> <h2>'+ field.dienstname +' </h2> <h3>' + field.dienstbeschreibenug +'</h3> </a>');
//		});
//	});
	
};

currentPage.serviceSelect = function (index){
	indexGlobal=index;
	currentPage.loadPage('user');
	
}

currentPage.loadPage = function(pageName){
	WL.Logger.debug("Full :: loadPage :: pageName: " + pageName);
	pagesHistory.push("full");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


currentPage.back = function(){
	WL.Logger.debug("Full :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

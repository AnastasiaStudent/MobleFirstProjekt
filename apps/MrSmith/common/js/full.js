currentPage = {};
currentPage.init = function(){
	WL.Logger.debug('Full :: init');
	$("#back").css("visibility", "hidden");
	$("#pageDescr").html('All logins');
	var dienste = JSON.parse(localStorage.getItem('services'));
	$.each(dienste, function(i, field) {
		if (field.user.length > 0){
	$('#listFull ').append('<a onclick="currentPage.serviceSelect('+ i + ')" class="item item-avatar listColor " href="#"> <img src="' + field.logo +'"> <h2>'+ field.dienstname +' </h2> <h3>' + field.dienstbeschreibenug +'</h3> </a>');
		}});
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

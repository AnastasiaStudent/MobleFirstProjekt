currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("MngtUser :: init");
	$("#pageDescr").html('Manage User');
	var dienste = JSON.parse(localStorage.getItem('services'));
	$.each(dienste[indexGlobal].user, function(i, field) {	
	$('#mngtuserList').append('<a onclick="currentPage.userSelect('+ i + ')" class="item item-avatar listColor " href="#"> <img src="' + dienste[indexGlobal].logo +'"> <h2>'+ field +' </h2> <h3>' + dienste[indexGlobal].dienstname +'</h3> </a>');
		});
};

currentPage.userSelect = function (index){
	userIndexGlobal=index;
	currentPage.loadPage('editaccount');
	
}
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


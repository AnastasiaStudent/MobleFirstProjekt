currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("Mngt :: init");
	$("#pageDescr").html('Manage list');
//$('#plus').show();
	$("#plus").css("visibility", "visible");
	var dienste = JSON.parse(localStorage.getItem('services'));
	$.each(dienste, function(i, field) {
		if (field.user.length > 0){
	$('#mngtList').append('<a onclick="currentPage.serviceSelect('+ i + ')" class="item item-avatar listColor " href="#"> <img src="' + field.logo +'"> <h2>'+ field.dienstname +' </h2> <h3>' + field.dienstbeschreibenug +'</h3> </a>');
		}});
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
currentPage.serviceSelect = function (index){
	indexGlobal=index;
	currentPage.loadPage('mngtuser');
	
}

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


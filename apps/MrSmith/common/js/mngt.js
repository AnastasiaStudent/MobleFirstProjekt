currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("Mngt :: init");
	$("#pageDescr").html('Manage list');
	$("#plus_kreuz").addClass("button ion-plus button-clear");
	$("#plus_kreuz").css("visibility", "visible");
	$("#plus_kreuz").attr("onclick", "currentPage.loadPage('newaccount')")
	
	var dienste = JSON.parse(localStorage.getItem('services'));
	$.each(dienste, function(i, field) {
		if (field.user.length > 0){
	$('#mngtList').append('<a onclick="currentPage.serviceSelect('+ i + ')" class="item item-avatar listColor " href="#"> <img src="' + field.logo +'"> <h2>'+ field.dienstname +' </h2> <h3>' + field.dienstbeschreibenug +'</h3> </a>');
		}});
};

currentPage.serviceSelect = function (index){
	indexGlobal=index;
	currentPage.loadPage('mngtuser');
	
}


currentPage.loadPage = function(pageName){
	$("#plus_kreuz").removeClass("button ion-close-circled button-clear");
	$("#plus_kreuz").css("visibility", "hidden");
	$("#plus_kreuz").attr("onclick", "")
	
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
	$("#plus_kreuz").removeClass("button ion-close-circled button-clear");
	$("#plus_kreuz").css("visibility", "hidden");
	$("#plus_kreuz").attr("onclick", "")
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


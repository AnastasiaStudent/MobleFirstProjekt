currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("Options :: init");
	$("#pageDescr").html('Options');
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
	if (confirm("Are you sure?") == true) {
		deleteHash();
		loadService();
//		//Daten aus localStorage holen
//		var dienste = JSON.parse(localStorage.services);
//		var lengthUser;
//
//		//iterieren ueber JSON_array: key := 0, 1, ..., n
//		for (key in dienste) {
//			 lengthUser = dienste[key].user.length;
//					//alert(lengthUser + " : DELETE: " + dienste[key].user);
//					dienste[key].user.splice(0, lengthUser);
//				
//		}
//		//Daten in den JSON_array schreiben
//		localStorage.setItem('services', JSON.stringify(dienste));
		
		currentPage.loadPage('setmapw');
		
	} 

}

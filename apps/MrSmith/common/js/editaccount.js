currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("Edit Account :: init");
	$("#pageDescr").html('Edit account');
//einfuegen hier
};

currentPage.loadPage = function(pageName){
	WL.Logger.debug("Edit account :: loadPage :: pageName: " + pageName);
	pagesHistory.push("editaccount");
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

function editDelete() {
	var x;
	if (confirm("Are you sure?") == true) {
		x = "done";
		//Account löschen
		currentPage.loadPage('mngt');
	} else {
		x = "cancelled";
	}
	document.getElementById("demo").innerHTML = x;
}

function showPw() {
	alert("YOUR PW");
}

currentPage.back = function(){
	WL.Logger.debug("Edit account :: back");
	var pageName=pagesHistory.pop();
	$("#pagePort").load(path + "pages/" + pageName + ".html", function(){
		$.getScript(path + "js/"+ pageName+".js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};


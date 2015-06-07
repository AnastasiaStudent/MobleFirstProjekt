/*
 *
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.

 */

var pagesHistory = [];
var currentPage = {};
var path = "";
var mapw;
var indexGlobal;
var userIndexGlobal;
var busyInd = new WL.BusyIndicator ("content", {text: "Please wait..."});

function wlCommonInit() {
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['app-main']);
	});
	var pageName;
	var hashwert = JSON.parse(localStorage.mapw)[0].hashwert;
	//servicesCopy();
	// Special case for Windows Phone 8 only.
	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
		path = "/www/default/";
	}

	if (hashwert.length == 0) {
		pageName = "setmapw";
} else {
			pageName = "start";
			}
			
	$("#pagePort").load(path + "pages/" + pageName + ".html", function() {
				$.getScript(path + "js/" + pageName + ".js", function() {
					if (currentPage.init) {
						currentPage.init();
					}
				});		

	});
}
getMApw = function(){
	return this.mapw;
}

setMApw = function(newMapw){
	this.mapw=newMapw;
}
function wait(){
	if(busyInd.isVisible()) {busyInd.hide();}
	else {busyInd.show();};
}

//WL.App.BackgroundHandler.setOnAppEnteringForeground( function () {
//	  alert("This is my custom code");
//	  return WL.App.BackgroundHandler.hideViewToForeground();
//	}); 
//
//WL.App.BackgroundHandler.setOnAppEnteringBackground(function () {
//	  alert("This is my custom code2");
//	  //return WL.App.BackgroundHandler.hideViewToForeground();
//	});
document.addEventListener("resume", onResume, true);
function onResume(){
	$("#plus_kreuz").removeClass("button ion-close-circled button-clear");
	$("#plus_kreuz").removeClass("button ion-plus button-clear");
	$("#plus_kreuz").css("visibility", "hidden");
	$("#plus_kreuz").attr("onclick", "");
	wlCommonInit();
}
//function toggleOverlay(){
//	
//	
//	var overlay = document.getElementById('overlay');
//	var specialBox = document.getElementById('specialBox');
//	overlay.style.opacity = .8;
//	if(overlay.style.display == "block"){
//		overlay.style.display = "none";
//		specialBox.style.display = "none";
//	} else {
//		overlay.style.display = "block";
//		specialBox.style.display = "block";
//	}
//}
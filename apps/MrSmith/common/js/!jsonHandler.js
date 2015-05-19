var platforms = null;
chrome.storage.local.get("platforms", function(res){
    if(typeof res.platforms==='undefined'){
        platforms = (function () {
            var json = null;
            $.ajax({
                async: false,
                global: false,
                url: "platforms.json",
                dataType: "json",
                'success': function (data) {
                    json = data;
                }
            });
            return json;
        })();  
        chrome.storage.local.set({"platforms": platforms}, function () {
            console.log('Saved');
        });
        console.log("json loaded from file");
        return;
    } else {
        platforms=res.platforms;
        console.log("json loaded from chrome.storage");
    }
});


function updateJSON(){
    chrome.storage.local.set({"platforms": platforms}, function () {
        console.log('Saved updates');
    });
}


function changeJSON() {
    $.ajax
    ({
        type: "POST",
        //the url where you want to sent the userName and password to
        url: 'platforms.json',
        dataType: 'json',
        async: false,
        //json object to sent to the authentication url
        data: JSON.stringify(platforms),
        success: function () {
        	console.log("chaged"); 
        }
    })
}

function resetStorage(){

}


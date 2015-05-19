var platforms = null;
if (localStorage.platforms == null || localStorage.platforms === 'undefined' )
	{
	alert("nicht vorhanden");

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
    localStorage.setItem("platforms", platforms);
    console.log("json loaded from file");
    return;
	}
else {
	alert (localStorage.platforms);
}

if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
}
// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

var values = [2,4,8,16,32,64,128,256,512,1024,2048];
var els = [];

for (var i = 0; i < values.length; i++) {
	var image = document.location.search.match(values[i]+'=(.+?)(&|$)');

	if(typeof image == "object" && image != null && typeof image[1] == "string") {
		document.querySelector(".image-form .num"+values[i]+" input").value = image[1];
		document.querySelector(".image-form .num"+values[i]+" img").src = image[1];
	}
};

document.querySelector(".image-form").addEventListener("submit", function (event) {

	var new_url = document.location.pathname;
	new_url += "?";

	for (var i = 0; i < values.length; i++) {
		if(document.querySelector(".image-form .num"+values[i]+" input").value != "") {
			new_url += values[i]+"="+document.querySelector(".image-form .num"+values[i]+" input").value + "&";
		}
	};

	document.location = new_url;
	event.preventDefault();
	return false;
});

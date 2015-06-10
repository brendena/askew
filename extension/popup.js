document.addEventListener('DOMContentLoaded', function() {	

	document.getElementById("form").onsubmit = function () {
		var degree = document.getElementById("degree").value;

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {askew: degree});
		});

	} //end of onsubmit

});


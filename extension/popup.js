var degreesToRotate = function(degrees){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {askew: degrees});
	});	
}

document.addEventListener('DOMContentLoaded', test =  function() {	
    var upSideDown = document.getElementById("upSideDown");
	var rightSlanted = document.getElementById("rightSlanted");
	var leftSlanted = document.getElementById("leftSlanted");
	var normal = document.getElementById("normal");
	console.log("loaded dom content")
	
	
	document.getElementById("normalSubmit").addEventListener("click", function(){
		
		var degrees = document.getElementById("degrees").value;
		degreesToRotate(degrees)
	}); //end of onsubmit

	upSideDown.addEventListener("click", function(){
		degreesToRotate(180)
	});
	rightSlanted.addEventListener("click", function(){
		degreesToRotate(90)
	});
	leftSlanted.addEventListener("click", function(){
		degreesToRotate(270)
	});
	normal.addEventListener("click", function(){
		degreesToRotate(0)
	});
    
});
//console.log("looaded Page")

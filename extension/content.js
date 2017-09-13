console.log("working1");
var runtimeFunction = function(request, sender) {
	if(request.hasOwnProperty('askew')){
		var bodyStyle = document.body.style;
		/*
		console.log(request.askew)
		if(request.askew === 90 || request.askew === 270 ){
			console.log("special");
			//bodyStyle.overflowY = "hidden";
			//bodyStyle.maxHeight = "100vh";
			console.log("special")
		}
		*/
		bodyStyle.transform = "rotate(" + request.askew + "deg)";
	}
}



chrome.runtime.onMessage.addListener(
	runtimeFunction
);


/*
set 90 and 270 to this
overflow-y: hidden;
max-height: 100vh;
* 
* On 90 and 270
* What i need to do
* set html width : 100vw and height 100vh
* 
* But on the body 
* width: 100vh and height: vw
* This is because the dimension don't swap on a transform.
*/

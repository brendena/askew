window.onload = function(){
	console.log("working");
	chrome.runtime.onMessage.addListener(function(request, sender) {
		if(request.hasOwnProperty('askew')){
			var $gContainer = $("#theGreatContainer"); 
			var $webContainer = $("#theWebContainer");
			if($gContainer.length <= 0){
				$("body").children().wrapAll("<div id='theGreatContainer'></div>").wrapAll("<div id='theWebContainer'></div>");
				$gContainer = $("#theGreatContainer");
				$webContainer = $("#theWebContainer");
			}
			if(request.type = "original")
			{
				$gContainer.css("transform","rotate(" + request.askew + "deg)")
			}
		
		}//end of if statment
	}); //end of chrome.runtime.onmessage and function
}//end of onload
//this formula will calculate the postion based on the root cordinate and the side you give it

function sind(d) {
  return Math.sin(Math.PI*d/180.0); 
}
var getPosition = function(degree, sideLength){
    
	var height = (sideLength * sind(degree));
	var x = (Math.sqrt(Math.pow(sideLength,2) - Math.pow(height,2)))
	var y = height;

	return {x:x,y:y};
}

var getBiggerRectWidthHeight = function(pos){
	return {x: pos.topRight.x - pos.bottomLeft.x, y: pos.bottomRight.y - pos.topLeft.y};
}

var assignPosition = function(pos,degree,length,height){
	pos.topLeft = {x:0,y:0};
	pos.topRight = getPosition(degree, length);
	pos.bottomLeft = getPosition(degree, height);
	console.log("bottomLEft");
	console.log(pos.bottomLeft);
	pos.bottomLeft = {x: (pos.bottomLeft.y * -1), y: pos.bottomLeft.x}

	if(degree > 90 && degree < 270){
		  pos.topRight.x = pos.topRight.x * -1;
		  pos.bottomLeft.y = pos.bottomLeft.y * -1;
	}
	pos.bottomRight = {x: (pos.bottomLeft.x + pos.topRight.x),
								 y: (pos.bottomLeft.y + pos.topRight.y)};
}


var fullView = function(){
	/*
	var pageDimensions = {x: $("body").width(), y: $("body").height()};

	var $gContainer = $("#theGreatContainer"); 
	var $webContainer = $("#theWebContainer");
	if($gContainer.length <= 0){
		$("body").children().wrapAll("<div id='theGreatContainer'></div>").wrapAll("<div id='theWebContainer'></div>");
		$gContainer = $("#theGreatContainer");
		$webContainer = $("#theWebContainer");
	}


		
	console.log("test")
	console.log(innerPosition)				
	console.log(request.askew)
	console.log(pageDimensions)


	


	$webContainer.css({ "transform": "rotate(" + request.askew + "deg)",
											"margin-left":(innerPosition.bottomLeft.x * -1)+ "px"});

	var gRectangleWidthHeight = getBiggerRectWidthHeight(innerPosition);

	console.log("greater rectangle")				
	console.log(gRectangleWidthHeight);

	$gContainer.css({"width":Math.floor(gRectangleWidthHeight.x) + "px",
						 "height":Math.floor(gRectangleWidthHeight.y) + "px",
							})
	*/
}











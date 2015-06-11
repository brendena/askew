document.addEventListener('DOMContentLoaded', function() {	

	document.getElementById("form").onsubmit = function () {
		var degree = document.getElementById("degree").value;
		var type = getRadioVal(this, "type");
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {askew: degree,type: type});
		});

	} //end of onsubmit

});


function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}

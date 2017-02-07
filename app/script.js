var input = document.getElementById('message_in');
var msg =document.getElementById('msg-label');
var maxLength = 50;

var validateInput = function (event) {
	// console.log(event);
	if(input.value.length <= maxLength) {
        msg.innerHTML = "Charecter left : " + (maxLength-input.value.length)+ "/50";
    }
	// body...
}
setInterval(validateInput, 300);
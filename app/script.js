
//http://w3lessons.info/2015/03/14/how-to-share-content-on-whatsapp-using-jquery/
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
var out = document.getElementById('out');
var submit =function  () {
	
	console.log(document.getElementById('imgId').value)
	out.value = document.getElementById('imgId').value;
}

var forward = function(){
	var message = encodeURIComponent(out.value);
	var whatsapp_url = "whatsapp://send?text=" + message;
	alert(whatsapp_url);
    window.location.href = whatsapp_url;
}
// var prevent = function(event){
// 	event.preventDefault();
//     return false;
// }
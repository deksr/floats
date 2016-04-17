$(document).ready(function() {
console.log("hi");
$('.pressButton').on('click', function(){
	$('.appendstart').append('<li> <input autofocus> </li>').addClass('cssme')
	$('focusme').focus()
})
})

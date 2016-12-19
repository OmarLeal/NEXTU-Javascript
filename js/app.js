 $('.btn-reinicio').click(function(){
 	$(this).text("Reiniciar");
 });
var images = ['1.png', '2.png', '3.png', '4.png'];
$('<img class="ui-state-default blink_me" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-2');
$('<img class="ui-state-default blink_me" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-2');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-2');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-2');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-2');

$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-3');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-3');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-3');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-3');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-3');

$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-4');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-4');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-4');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-4');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-4');

$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-5');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-5');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-5');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-5');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-5');

$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-6');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-6');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-6');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-6');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-6');

$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-7');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-7');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-7');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-7');
$('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-7');

$(function(){
	$('.ui-state-default').sortable();
	$( "#sortable" ).disableSelection();

});
$('.ui-state-default').mouseup(function(){
	$('#movimientos-text').html(parseInt($('#movimientos-text').html(), 10)+1) 	
 });

function blinkDulces(){
	if($("img[src='1.png']").length==2){
	$("ui-state-default").addClass("blink_me");
}else {
	alert("No hay coincidencias");
}
}
var images = ['1.png', '2.png', '3.png', '4.png'];
jQuery.each( images, function( i, val ) {
 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-1'); 
 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-2'); 
 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-3'); 
 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-4'); 
 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-5'); 
 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-6'); 
 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.col-7'); 
});


$('img').mouseup(function(){
	$("#movimientos-text").text(parseInt($("#movimientos-text").text()) + 1);
 });
 
 $('.btn-reinicio').click(function(){
 	$(this).text("Reiniciar");
 });
$(function(){
		if($('.col-1').find('[src$="image/1.png"]').next('[src$="1.png"]').length >=2){
			$('.col-1').find('[src$="image/1.png"]').addClass("blink_me")
			$('.col-1').find('[src$="image/1.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/1.png"]').length)] + '">').appendTo('.col-1'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}
		if($('.col-1').find('[src$="image/2.png"]').next('[src$="2.png"]').length >=2){
			$('.col-1').find('[src$="image/2.png"]').addClass("blink_me")
			$('.col-1').find('[src$="image/2.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/2.png"]').length)] + '">').appendTo('.col-1'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}		
		if($('.col-1').find('[src$="image/3.png"]').next('[src$="3.png"]').length >=2){
			$('.col-1').find('[src$="image/3.png"]').addClass("blink_me")
			$('.col-1').find('[src$="image/3.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/3.png"]').length)] + '">').appendTo('.col-1'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}		
		if($('.col-1').find('[src$="image/4.png"]').next('[src$="4.png"]').length >=2){
			$('.col-1').find('[src$="image/4.png"]').addClass("blink_me")
			$('.col-1').find('[src$="image/4.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/4.png"]').length)] + '">').appendTo('.col-1'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}	
		
	});
$(function(){
		if($('.col-2').find('[src$="image/1.png"]').next('[src$="1.png"]').length >=2){
			$('.col-2').find('[src$="image/1.png"]').next('[src$="1.png"]').addClass("blink_me")
			$('.col-2').find('[src$="image/1.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/1.png"]').length)] + '">').appendTo('.col-2'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}
		if($('.col-2').find('[src$="image/2.png"]').next('[src$="2.png"]').length >=2){
			$('.col-2').find('[src$="image/2.png"]').next('[src$="2.png"]').addClass("blink_me")
			$('.col-2').find('[src$="image/2.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/2.png"]').length)] + '">').appendTo('.col-2'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}		
		if($('.col-2').find('[src$="image/3.png"]').next('[src$="3.png"]').length >=2){
			$('.col-2').find('[src$="image/3.png"]').next('[src$="3.png"]').addClass("blink_me")
			$('.col-2').find('[src$="image/3.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/3.png"]').length)] + '">').appendTo('.col-2'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}		
		if($('.col-2').find('[src$="image/4.png"]').next('[src$="4.png"]').length >=2){
			$('.col-2').find('[src$="image/4.png"]').next('[src$="4.png"]').addClass("blink_me")
			$('.col-2').find('[src$="image/4.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/4.png"]').length)] + '">').appendTo('.col-2'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}
	});
$(function(){
		if($('.col-3').find('[src$="image/1.png"]').next('[src$="1.png"]').length >=2){
			$('.col-3').find('[src$="image/1.png"]').next('[src$="1.png"]').addClass("blink_me")
			$('.col-3').find('[src$="image/1.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/1.png"]').length)] + '">').appendTo('.col-3'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}
		if($('.col-3').find('[src$="image/2.png"]').next('[src$="2.png"]').length >=2){
			$('.col-3').find('[src$="image/2.png"]').next('[src$="2.png"]').addClass("blink_me")
			$('.col-3').find('[src$="image/2.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/2.png"]').length)] + '">').appendTo('.col-3'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}		
		if($('.col-3').find('[src$="image/3.png"]').next('[src$="3.png"]').length >=2){
			$('.col-3').find('[src$="image/3.png"]').next('[src$="3.png"]').addClass("blink_me")
			$('.col-3').find('[src$="image/3.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/3.png"]').length)] + '">').appendTo('.col-3'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}		
		if($('.col-3').find('[src$="image/4.png"]').next('[src$="4.png"]').length >=2){
			$('.col-3').find('[src$="image/4.png"]').next('[src$="4.png"]').addClass("blink_me")
			$('.col-3').find('[src$="image/4.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/4.png"]').length)] + '">').appendTo('.col-3'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}	
	});

$(function(){
		if($('.col-4').find('[src$="image/1.png"]').next('[src$="1.png"]').length >=2){
			$('.col-4').find('[src$="image/1.png"]').next('[src$="1.png"]').addClass("blink_me")
			$('.col-4').find('[src$="image/1.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/1.png"]').length)] + '">').appendTo('.col-4'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}
		if($('.col-4').find('[src$="image/2.png"]').next('[src$="2.png"]').length >=2){
			$('.col-4').find('[src$="image/2.png"]').next('[src$="2.png"]').addClass("blink_me")
			$('.col-4').find('[src$="image/2.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/2.png"]').length)] + '">').appendTo('.col-4'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}		
		if($('.col-4').find('[src$="image/3.png"]').next('[src$="3.png"]').length >=2){
			$('.col-4').find('[src$="image/3.png"]').next('[src$="3.png"]').addClass("blink_me")
			$('.col-4').find('[src$="image/3.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/3.png"]').length)] + '">').appendTo('.col-4'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}		
		if($('.col-4').find('[src$="image/4.png"]').next('[src$="4.png"]').length >=2){
			$('.col-4').find('[src$="image/4.png"]').next('[src$="4.png"]').addClass("blink_me")
			$('.col-4').find('[src$="image/4.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/4.png"]').length)] + '">').appendTo('.col-4'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}	
	});	
$(function(){
		if($('.col-5').find('[src$="image/1.png"]').next('[src$="1.png"]').length >=2){
			$('.col-5').find('[src$="image/1.png"]').next('[src$="1.png"]').addClass("blink_me")
			$('.col-5').find('[src$="image/1.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/1.png"]').length)] + '">').appendTo('.col-5'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}
		if($('.col-5').find('[src$="image/2.png"]').next('[src$="2.png"]').length >=2){
			$('.col-5').find('[src$="image/2.png"]').next('[src$="2.png"]').addClass("blink_me")
			$('.col-5').find('[src$="image/2.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/2.png"]').length)] + '">').appendTo('.col-5'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}		
		if($('.col-5').find('[src$="image/3.png"]').next('[src$="3.png"]').length >=2){
			$('.col-5').find('[src$="image/3.png"]').next('[src$="3.png"]').addClass("blink_me")
			$('.col-5').find('[src$="image/3.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/3.png"]').length)] + '">').appendTo('.col-5'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}		
		if($('.col-5').find('[src$="image/4.png"]').next('[src$="4.png"]').length >=2){
			$('.col-5').find('[src$="image/4.png"]').next('[src$="4.png"]').addClass("blink_me")
			$('.col-5').find('[src$="image/4.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/4.png"]').length)] + '">').appendTo('.col-5'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}	
	});	
$(function(){
		if($('.col-6').find('[src$="image/1.png"]').next('[src$="1.png"]').length >=2){
			$('.col-6').find('[src$="image/1.png"]').next('[src$="1.png"]').addClass("blink_me")
			$('.col-6').find('[src$="image/1.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/1.png"]').length)] + '">').appendTo('.col-6'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}
		if($('.col-6').find('[src$="image/2.png"]').next('[src$="2.png"]').length >=2){
			$('.col-6').find('[src$="image/2.png"]').next('[src$="2.png"]').addClass("blink_me")
			$('.col-6').find('[src$="image/2.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/2.png"]').length)] + '">').appendTo('.col-6'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}		
		if($('.col-6').find('[src$="image/3.png"]').next('[src$="3.png"]').length >=2){
			$('.col-6').find('[src$="image/3.png"]').next('[src$="3.png"]').addClass("blink_me")
			$('.col-6').find('[src$="image/3.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/3.png"]').length)] + '">').appendTo('.col-6'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}		
		if($('.col-6').find('[src$="image/4.png"]').next('[src$="4.png"]').length >=2){
			$('.col-6').find('[src$="image/4.png"]').next('[src$="4.png"]').addClass("blink_me")
			$('.col-6').find('[src$="image/4.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/4.png"]').length)] + '">').appendTo('.col-6'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}	
	});	
$(function(){
		if($('.col-7').find('[src$="image/1.png"]').next('[src$="1.png"]').length >=2){
			$('.col-7').find('[src$="image/1.png"]').next('[src$="1.png"]').addClass("blink_me")
			$('.col-7').find('[src$="image/1.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/1.png"]').length)] + '">').appendTo('.col-7'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}
		if($('.col-7').find('[src$="image/2.png"]').next('[src$="2.png"]').length >=2){
			$('.col-7').find('[src$="image/2.png"]').next('[src$="2.png"]').addClass("blink_me")
			$('.col-7').find('[src$="image/2.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/2.png"]').length)] + '">').appendTo('.col-7'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}		
		if($('.col-7').find('[src$="image/3.png"]').next('[src$="3.png"]').length >=2){
			$('.col-7').find('[src$="image/3.png"]').next('[src$="3.png"]').addClass("blink_me")
			$('.col-7').find('[src$="image/3.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/3.png"]').length)] + '">').appendTo('.col-7'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}		
		if($('.col-7').find('[src$="image/4.png"]').next('[src$="4.png"]').length >=2){
			$('.col-7').find('[src$="image/4.png"]').next('[src$="4.png"]').addClass("blink_me")
			$('.col-7').find('[src$="image/4.png"]').toggle(2000)
			var images = ['1.png', '2.png', '3.png', '4.png'];
			jQuery.each( images, function( i, val ) {
			 $('<img class="ui-state-default" src="image/' + images[Math.floor(Math.random() * $('.col-1').find('[src$="image/4.png"]').length)] + '">').appendTo('.col-7'); 
			 $("#score-text").text(parseInt($("#score-text").text()) + 12);
			 });
		}	
	});	
 $( function() {
    $( ".ui-state-default" ).sortable({axis: "y", connectWith: ".panel-tablero"});
    $( ".ui-state-default" ).disableSelection();
  });



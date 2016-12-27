var startValue = 120000; 
var time = new Date(startValue);
var interv;


function done(){    
    $( ".panel-tablero" ).toggle(2000);
    $( ".time" ).toggle(2000);
    $( ".score" ).animate({        
     "width": "1500px",
     "margin-left": "20px"
  }, 2000 );
    $( ".moves" ).animate({        
     "width": "1500px",
     "margin-left": "20px"
  }, 2000 );
    $(".main-titulo").append("<h3 class='main' id='juegoTerminado' style='text-align: center;'>Juego Terminado</h3>");        
 
$('.btn-reinicio').click(function(){        
    location.reload();
    $( ".panel-tablero" ).show();
    $( ".time" ).show();
    $("#juegoTerminado").toggle(2000);
    time = new Date(120000);
    $('#score-text').text("0");
    $('#movimientos-text').text("0");
    $( ".score" ).animate({        
     "width": "100%",
  }, 2000 );
    $( ".moves" ).animate({        
     "width": "100%",
  }, 2000 );
 });
}
$(function(){
    displayTime();
    $(".start").on("click", function(){
    interv = setInterval(function(){
        time = new Date(time - 1000);
        if(time<=0){
            done();
            clearInterval(interv);
        }
        displayTime();
    }, 1000);
    });
    $(".stop").on("click", function(){
        clearInterval(interv);
        time = new Date(120000);
        displayTime();
    });
    $(".pause").on("click", function(){
        clearInterval(interv);
    });
    $("btn:contains('Reiniciar')").on("click", function(){
        time = new Date(120000);        
        displayTime();
    });
});

function displayTime(){
    $(".time").text(fillZeroes(time.getMinutes()) + ":" + fillZeroes(time.getSeconds()));
}

function fillZeroes(t){
    t = t+"";
    if(t.length==1)
        return "0" + t;
    else
        return t;
}

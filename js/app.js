window.onload = function(){ 
var pantalla= document.getElementById("display"); 
}
x="0"; 
xi=1; 
coma=0;
ni=0; 
op="no";

function numero(xx) {  
         if (x=="0" || xi==1  ) {  
            document.getElementById("display").innerHTML=xx; 
            x=xx; 
            }
            else {
            document.getElementById("display").innerHTML+=xx; 
            x+=xx; 
            }
          if (xx.length<8)

         xi=0 
         }

function borradoTotal() {
         document.getElementById("display").innerHTML=0; 
         x="0"; 
         coma=0; 
         ni=0 
         op="no" 
         }            
function operarador(s) {
         igualar() 
         ni=x 
         op=s; 
         xi=1; 
          }

function igualar() {
         if (op=="no") { 
            document.getElementById("display").innerHTML=x; 
            }
         else { 
            sl=ni+op+x; 
            sol=eval(sl) 
            document.getElementById("display").innerHTML=sol 
            x=sol; 
            op="no"; 
            xi=1; 
            }
        }
function teclado (elEvento) { 
         evento = elEvento || window.event;
         k=evento.keyCode; 
         
         if (k>47 && k<58) { 
            p=k-48; 
            p=String(p)
            numero(p); 
            } 
         
         if (k>95 && k<106) {
            p=k-96;
            p=String(p);
            numero(p);
            }
         if (k==110 || k==190) {numero(".")} 
         if (k==106) {operarador('*')} 
         if (k==107) {operarador('+')} 
         if (k==109) {operarador('-')} 
         if (k==111) {operarador('/')} 
         if (k==32 || k==13) {igualar()} 
         if (k==46) {borradoTotal()} 
         }
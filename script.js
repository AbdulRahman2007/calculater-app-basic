
var display = document.querySelector("input");

 function appendToDisplay(input){
  display.value+= input;
 }

 function calculate(){
    try {
        display.value = eval(display.value);
        
    } catch (error) {
        display.value= "error"
    }
  
 }

 function clear1(){
    display.value='';
 }

const decreasebutton=document.getElementById("decrease");
const increasebutton=document.getElementById("increase");
const resetbutton=document.getElementById("reset");
const countbt=document.getElementById("contador");
let count=0;


increasebutton.onclick=function(){
 count++;
 countbt.textContent=count;

}
decreasebutton.onclick=function(){
 count--;
 countbt.textContent=count;

}
resetbutton.onclick=function(){
 count=0;
 countbt.textContent=count;
}







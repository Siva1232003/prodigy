let display=document.getElementById("displaytext");
let cursorDot=document.querySelector('.cursorDot');
let cursorOutline=document.querySelector('.cursorOutline');

document.addEventListener("mousemove",(e)=>{
    cursorDot.style.left=e.pageX+"px"
    cursorDot.style.top=e.pageY+"px"
    cursorOutline.style.left=e.pageX+"px"
    cursorOutline.style.top=e.pageY+"px"
    cursorOutline.animate({
        left:e.pageX+"px",
        top:e.pageY+"px"
    },{duration:500,fill:"forwards"});
})
function appendToDisplay(input){
    display.value+=input;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value=`Error`;
    }
}
function clearDisplay(){
    display.value="";
}
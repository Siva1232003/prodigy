const menubar=document.querySelector(".menuItems");
const toggleRef=document.querySelectorAll("#toggleRef");


const scrollPadding=document.querySelector("nav").offsetHeight;
document.documentElement.style.setProperty('--scroll-padding',scrollPadding+"px");


for(let toggle of toggleRef){
    toggle.addEventListener("click",event=>{
        menubar.classList.toggle("show");
    })
}




let toggleButton=document.getElementById("toggleButton").onclick=()=>{
    menubar.classList.toggle("show");

}
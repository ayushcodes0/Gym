let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration: .5,
    })
})

const menu_content = document.getElementById("menu-content");
const menu_button = document.getElementById("nav-right");
const cross_button = document.getElementById("cross-icon");

menu_button.addEventListener("click", function(){
    menu_content.style.top = "0";
    menu_content.style.opacity = "1";
})

cross_button.addEventListener("click", function(){
    menu_content.style.top = "100vh";
    menu_content.style.opacity = "0";
})
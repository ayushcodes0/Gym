let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
// let imageDiv = document.querySelector(".image");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration: .5,
    })
})

// imageDiv.addEventListener("mouseenter",function(){
//     cursor.innerHTML = "View More"
//     gsap.to(cursor,{
//         scale: 10,
//         opacity: .7,
//         backgroundColor: "rgb(207, 104, 124)",
//     })
// })
// imageDiv.addEventListener("mouseleave",function(){
//     cursor.innerHTML = ""
//     gsap.to(cursor,{
//         scale: 1,
//         opacity: 1,
//         backgroundColor: "white",
//     })
// })
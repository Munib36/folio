let opacity = 1;
let y = window.scrollY;
let circle = document.getElementById("circle")
let triangle = document.getElementById("triangle")

if(y > 400){
    opacity = 0;
    circle.style.opacity = opacity;
}else{
    opacity = 1 - (y/400);
    circle.style.opacity = opacity;
}

window.addEventListener("scroll",()=>{
    y = window.scrollY;
    if(y > 400){
        opacity = 0;
        circle.style.opacity = opacity;
    }else{
        opacity = 1 - (y/400);
        circle.style.opacity = opacity;
        
    }
})

function contact() {
    window.scroll(0, window.scrollY + 100);
}



let blur = document.querySelectorAll("#blur");
let btn = document.getElementById("check")

btn.addEventListener("change", ()=>{
    if (btn.checked) {
        blur.forEach(element => {
            element.style.filter = "blur(3px)"
          });
      } else {
        blur.forEach(element => {
            element.style.filter = "blur(0px)"
          });
      }
})
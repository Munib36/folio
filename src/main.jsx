import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

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





//! this is weird i know but it removes the navbar when its too low

window.addEventListener("scroll",()=>{
    y = window.scrollY;
    if(y > window.innerHeight){ // i put window.innerHeight for responsiveness
        document.getElementById("nav").style.display = "none"
        blur.forEach(element => { //this blur because its kinda indirect but i cant do anything abt it
            element.style.filter = "blur(0px)"
        });
    }else{
        document.getElementById("nav").style.display = "block"
        if(btn.checked){ // same here but it checks first if its checked
            blur.forEach(element => { 
                element.style.filter = "blur(3px)"
            });
            
        }
    }
})
//! checks for change of width (just small bug but sure)
window.addEventListener("resize", ()=>{
  
})







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

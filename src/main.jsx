import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

let opacity = 1;
let YScroll = window.scrollY;
let XWidth = window.innerWidth;
let circle = document.getElementById("circle");
let nav = document.getElementById("nav");
let maxPoint__scrollfunction = window.innerHeight;

if (YScroll > 400) {
	opacity = 0;
	circle.style.opacity = opacity;
} else {
	opacity = 1 - (YScroll / 400);
	circle.style.opacity = opacity;
}

window.addEventListener("scroll", () => {
	YScroll = window.scrollY;
	if (YScroll > 400) {
		opacity = 0;
		circle.style.opacity = opacity;
	} else {
		opacity = 1 - (YScroll / 400);
		circle.style.opacity = opacity;

	}
})

function contact() {
	window.scroll(0, window.scrollY + 100);
}




let blur = document.querySelectorAll("#blur");
let btn = document.getElementById("check")

btn.addEventListener("change", () => {
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


function blurScreen(){
	blur.forEach(element => {
		element.style.filter = "blur(3px)"
	});
}
function unblurScreen(){
	blur.forEach(element => {
		element.style.filter = "blur(0px)"
	});
}



//! this is weird i know but it removes the navbar when its too low

window.addEventListener("scroll", () => {
	YScroll = window.scrollY; //* update

	if (YScroll > maxPoint__scrollfunction) { 
		nav.style.display = "none"
		unblurScreen();
	} else if ((YScroll < maxPoint__scrollfunction) && (XWidth > 650)) {
		nav.style.display = "block"
	} else {
		nav.style.display = "block"
		if (btn.checked) {
			blurScreen();
		}
	}
})
//! checks for change of width (just small bug but sure)

window.addEventListener("resize", () => {
	XWidth = window.innerWidth; //* update

	if (XWidth > 650) {
		unblurScreen();
	} else if(btn.checked && YScroll < maxPoint__scrollfunction) {
		blurScreen();
	}
})







ReactDOM.createRoot(document.getElementById('root')).render( 
	<React.StrictMode >
		<App />
	</React.StrictMode>,
)
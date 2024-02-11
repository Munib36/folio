import React from "react"
import image from "/waving-hand.jpg"



export default function About(){
    React.useEffect(()=>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });
        const hiddenElements = document.querySelectorAll('.hidden') ;
        console.log(hiddenElements)
        hiddenElements.forEach((el) => observer.observe(el));
    }, [1])


    

    return(
        <div className="about hidden" id="about">
            <div className="about__hi"><h1>Hi!</h1> <img src={image} /></div>
            <h1>I'm Munib Sondak</h1>
            <h2>Let's keep it simple and A W E S O M E!</h2>
            <h3>Self-taught Programmer & Junior Front-End Developer with a passion for bikes.</h3>
            <div className="about__buttons-container">
                <button className="about__buttons--buttons">LinkedIn</button>
                <button className="about__buttons--buttons">Github</button>
                <button className="about__buttons--buttons">Mail</button>
            </div>
        </div>
    )
}




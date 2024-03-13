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
            <h3>Self-taught Programmer & Junior Front-End Developer with a passion for electricity⚡</h3>
            <div className="about__buttons-container">
                
                
                
                <a href="https://ca.linkedin.com/in/munib-sondak-67a380288" target="_blank"><button className="about__buttons--buttons">LinkedIn</button></a>
                <a href="https://github.com/Munib36" target="_blank"><button className="about__buttons--buttons">Github</button></a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=business.munib@gmail.com" target="_blank"><button className="about__buttons--buttons">Mail</button></a>
            </div>
            
        </div>
    )
}




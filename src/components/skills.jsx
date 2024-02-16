import React from 'react'

import wrench from "/wrench.jpeg"
import react from "/react.jpeg"
import css from "/css.png"
import JS from "/JS.jpeg"
import git from "/git.png"




export default function Skills() {

    React.useEffect(()=>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('flip');
                }
            });
        });
        const hiddenElements = document.querySelectorAll('.card') ;

        hiddenElements.forEach((el) => observer.observe(el));
    }, [1])


    
    return(
        <div className='skills__container'>
            <div className='skills__container--title-container'>
                <h1>Tech Stack</h1>
            </div>
            <div className='skills__container--skills'>
                <div className='card card1'><img src={wrench} />Web Development</div>
                <div className='card card2'><img src={css} />CSS</div>
                <div className='card card3'><img src={JS} />Javascript</div>
                <div className='card card4'><img src={react} />React</div>
                <div className='card card5'><img src={git} />Git</div>
            </div>
        </div>
    )
}
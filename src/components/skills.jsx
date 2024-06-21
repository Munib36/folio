import React from 'react'

import html from "/html.png"
import react from "/react.png"
import css from "/css.png"
import JS from "/javascript.png"
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
        <div className='skills'>
            <div className='skills__container'>
                <div className='skills__container--skills'>
                    <div className='card card1'><img src={html} /></div>
                    <div className='card card2'><img src={css} /></div>
                    <div className='card card3'><img src={JS} /></div>
                    <div className='card card4'><img src={react} /></div>
                    <div className='card card5'><img src={git} /></div>
                </div>
            </div>
        </div>

    )
}
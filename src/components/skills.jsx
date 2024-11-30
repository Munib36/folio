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
                    <a className='card card1' href='#'><img src={html} /></a>
                    <a className='card card2' href='#'><img src={css} /></a>
                    <a className='card card3' href='#'><img src={JS} /></a>
                    <a className='card card4' href='#'><img src={react} /></a>
                    <a className='card card5' href='#'><img src={git} /></a>

                </div>
            </div>
        </div>

    )
}
import React from 'react'

import wrench from "/wrench.jpeg"
import react from "/react.jpeg"
import css from "/css.png"
import JS from "/JS.jpeg"
import git from "/git.png"




export default function Skills() {
    return(
        <div className='skills__container'>
            <div className='skills__container--title-container'>
                <h1>Tech Stack</h1>
            </div>
            <div className='skills__container--skills'>
                <div><img src={wrench} />Web Development</div>
                <div><img src={css} />CSS</div>
                <div><img src={JS} />Javascript</div>
                <div><img src={react} />React</div>
                <div><img src={git} />Git</div>
            </div>
        </div>
    )
}
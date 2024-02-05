// import image1 from ""

import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { faGithub } from '@fontawesome/free-solid-svg-icons';


function ProjectOne(){
    return(
        <div>
            <div>
                {/* <img src="" alt="" /> */}
                <div className="tempImage"></div>
            </div>
            <div className="card__text">
                <span>🏦Personal Project</span>
                <h4>Tenzies Game</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid exercitationem deleniti sunt est tenetur architecto excepturi blanditiis cupiditate saepe incidunt rerum, eius maxime error adipisci necessitatibus, similique tempore asperiores beatae molestiae iure magnam distinctio! Dolores magnam eveniet libero doloremque error commodi sunt voluptatem! Quae quasi assumenda autem debitis modi!</p>
                <div>
                    <p>React</p>
                    <p>Web Game</p>
                    <p>TailwindCSS</p>
                </div>
                <div>
                    <a href=""></a>
                    <a href=""></a>
                </div>
            </div>
        </div>
    )
}
function ProjectTwo(){
    return(
        <div>
            <div className="card__text">
                <span>🏦Personal Project</span>
                <h4>Tenzies Game</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid exercitationem deleniti sunt est tenetur architecto excepturi blanditiis cupiditate saepe incidunt rerum, eius maxime error adipisci necessitatibus, similique tempore asperiores beatae molestiae iure magnam distinctio! Dolores magnam eveniet libero doloremque error commodi sunt voluptatem! Quae quasi assumenda autem debitis modi!</p>
                <div>
                    <p>React</p>
                    <p>Web Game</p>
                    <p>TailwindCSS</p>
                </div>
                <div>
                    <a href=""></a>
                    <a href=""></a>
                </div>
            </div>
            <div>
                <div className="tempImage"></div>
            </div>
        </div>
    )
}
function ProjectThree(){
    return(
        <div>
            <div>
                <div className="tempImage"></div>
            </div>
            <div className="card__text">
                <span>🏦Personal Project</span>
                <h4>Tenzies Game</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid exercitationem deleniti sunt est tenetur architecto excepturi blanditiis cupiditate saepe incidunt rerum, eius maxime error adipisci necessitatibus, similique tempore asperiores beatae molestiae iure magnam distinctio! Dolores magnam eveniet libero doloremque error commodi sunt voluptatem! Quae quasi assumenda autem debitis modi!</p>
                <div>
                    <p>React</p>
                    <p>Web Game</p>
                    <p>TailwindCSS</p>
                </div>
                <div>
                    <a href=""><FontAwesomeIcon icon={faGithub} /></a>
                    <a href=""></a>
                </div>
            </div>
        </div>
    )
}

export default function Projects(){
    return(
        <div id="projects" className="project">
            <p>My Work👨‍💻</p>
            <ProjectOne />
            <ProjectTwo />
            <ProjectThree />
        </div>
    )
}
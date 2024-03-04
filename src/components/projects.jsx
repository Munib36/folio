import React from 'react'

import image1 from "/image1.png";
import image2 from "/image2.png";
import image3 from "/image2.png";



function Github(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
    )
}
function Link(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.818 194.818" x="0px" y="0px" role="img" fill="var(--subtext-color)" width="194.818px" height="194.818px"><g><path d="M185.8,2.2l-56.6,0c-4.8,0-9,3.6-9.3,8.4c-0.3,5.2,3.8,9.6,9,9.6h13.5c8.1,0,12.1,9.7,6.4,15.4L78,106.2 c-3.6,3.6-3.8,9.6-0.1,13.1c1.7,1.7,4,2.5,6.2,2.5c2.3,0,4.6-0.9,6.4-2.6l70.9-70.9c5.7-5.7,15.4-1.7,15.4,6.4v13.1 c0,4.8,3.6,9,8.4,9.3c5.2,0.3,9.6-3.8,9.6-9v-57C194.8,6.2,190.8,2.2,185.8,2.2z"></path><path d="M147.7,77.3c-4.5,0.6-7.7,4.7-7.7,9.2c0,14.6,0,59.7,0,79.1c0,5-4.1,9-9,9H27c-5,0-9-4.1-9-9V61.7c0-5,4.1-9,9-9l84.4,0 c4.8,0,9-3.6,9.3-8.4c0.3-5.2-3.8-9.6-9-9.6H9c-5,0-9,4.1-9,9v139.9c0,5,4.1,9,9,9H149c5,0,9-4.1,9-9V86.2 C158,80.8,153.2,76.5,147.7,77.3z"></path></g></svg>
    )
}

//! 20 - 25 words in descripton 
//! 20 - 25 words in descripton 
//! 20 - 25 words in descripton 


function ProjectOne(){
    return(
        <div className="project__card hidden">
            <div className="project__card--image">
                <img className="project__card--image-img1" src={image1} alt="" />
            </div>
            <div className="card__text">
                <span>🏦Personal Project</span>
                <h4>Tenzies Game</h4>
                <p>Fully working Tenzies game made with React.JS with a focus on hooks, counts best scores and time, clean and responsive design.</p>
                <div className="card__text--tools">
                    <p>React</p>
                    <p>Web Game</p>
                    <p>TailwindCSS</p>
                </div>
                <div className="card__text--links">
                    <a href="https://github.com/Munib36/react-practice">
                        <Github />
                    </a>
                    <a href="https://scrimba-prac.netlify.app/">
                        <Link />
                    </a>
                </div>
            </div>
        </div>
    )
}
function ProjectTwo(){
    
    return(
        <div className="project__card project__card2 hidden">
            <div className="card__text">
                <span>📸Personal Project</span>
                <h4>travel journal</h4>
                <p>My personal travel journal of places ive been in and enjoyed my time in. This website exercises React.JS API with responsive design.</p>
                <div className="card__text--tools">
                    <p>React</p>
                    <p>API</p>
                    <p>Responsive</p>
                </div>
                <div className="card__text--links">
                    <a href="https://github.com/Munib36/mytraveljournal">
                        <Github />
                    </a>
                    <a href="https://munibjournal.netlify.app/">
                        <Link />
                    </a>
                </div>
            </div>
            <div className="project__card--image">
                <img className="project__card--image-img2" src={image2} alt="" />
            </div>
        </div>
    )
}

function ProjectThree(){
    return(
        <div className="project__card hidden delete">
            <div className="project__card--image">
                <img className="project__card--image-img3" src={image3} alt="" />
            </div>
            <div className="card__text">
                <span>🎲Personal Project</span>
                <h4>Tenzies Game</h4>
                <p>Lorem ipsum dolor sit amet stiae iure magnam distinctio! Dolores magnam eveniet libero doloremque error commodi sunt voluptatem! Quae quasi assumenda autem debitis modi!</p>
                <div className="card__text--tools">
                    <p>React</p>
                    <p>Web Game</p>
                    <p>TailwindCSS</p>
                </div>
                <div className="card__text--links">
                    <a href="#">
                        <Github />
                    </a>
                    <a href="#">
                        <Link />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function Projects(){
    let [ width, setWidth ] = React.useState(window.innerWidth)
    React.useEffect(()=>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });
        const hiddenElements = document.querySelectorAll('.hidden') ;

        hiddenElements.forEach((el) => observer.observe(el));
    }, [1])


    
    React.useEffect(()=>{
        // console.log('effect ran')
        function handleResize () {
            setWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }   
    }, [])
    










    React.useEffect(()=>{

        function stars(El){
            let starBox = document.querySelector(El);
                
            // console.log('effect ran')
            let x1=0, y1=0;
            starBox.client
            const 
            vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
            dist_to_draw = 50,
            delay = 1000,
            fsize = [
                '1.1rem', '1.4rem', '.8rem', '1.7rem'
            ],
            colors = [
                'var(--primary-color)',
                'var(--secondary-color)',
                'var(--thirdrary-color)',
                'var(--quadrary-color)',
                '#FF6347', // Tomato
                '#FFA07A', // Light Salmon
                '#FFD700', // Gold
                '#FF8C00', // Dark Orange
            ],
            
            rand = (min, max) => 
                Math.floor(Math.random() * (max - min + 1)) + min,
            selRand = (o) => o[rand(0, o.length -1)],
            distanceTo =  (x1, y1, x2, y2) => 
                Math.sqrt((Math.pow(x2-x1,2))+(Math.pow(y2-y1,2))),
            shouldDraw = (x, y) => 
                (distanceTo(x1, y1, x, y) >= dist_to_draw),
            addStr = (x, y) => {
                const str = document.createElement("div");
                str.innerHTML = '&#10022;';
                str.className = 'star';
                str.style.top = `${y + rand(-20,20) + window.scrollY}px`;
                str.style.left = `${x}px`;
                str.style.color = selRand(colors);
                str.style.fontSize = selRand(fsize);

                document.body.appendChild(str)
                // console.log(rand(0, 3));
                const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize);
                //console.log(vh, y, fs);
                //console.log((y+fs)>vh?vh-y:fs);
                str.animate({
                translate: `0 ${(y+fs)>vh?vh-y:fs}px`,
                opacity: 0,
                transform: `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`
                }, {
                duration: delay,
                fill: 'forwards',

                });
                //could add a animation terminate listener, but why add the additional load
                setTimeout(() => {
                    str.remove();
                }, delay);
            }
            
            starBox.addEventListener("mousemove", (e) => {
                const {clientX, clientY} = e;
                if(shouldDraw(clientX, clientY)){
                addStr(clientX, clientY);
                x1 = clientX;
                y1 = clientY;
                }
            })

            return () => {
                starBox.removeEventListener("resize", (e) => {
                    const {clientX, clientY} = e;
                    if(shouldDraw(clientX, clientY)){
                    addStr(clientX, clientY);
                    x1 = clientX;
                    y1 = clientY;
                    }
                })
            }   
        }


        stars(".project__card--image-img1")
        stars(".project__card--image-img2")
        stars(".project__card--image-img3") 

    }, [])






    

    return(
        <div id="projects" className="project"> 
            <p>My Work👨‍💻</p>
            <div className="projects__container" id="style-1">
                <ProjectOne />
                <ProjectTwo />
                <ProjectThree />
            </div>  
        </div>
    )
}

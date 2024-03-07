import React from "react";
import image from "/who.jpeg"

export default function Who(){

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


        stars(".who__image-img");
    }, [1])

    


    return(
        <div className="who">
            <div className="who__text hidden">
                <h3>Who I am 🗿</h3>
                <br />
                <p>Hello! I'm Munib Sondak, self-taught programmer and electronics hobbyist.</p>
                <br />
                <p>In the last few years, I taken keen interest in programming and im quite proficient. i am self taught and quite confident in my abilities to handle the many challenges that programming presents.</p>
                <br />
                <p>in addition, i have always had a hungry curiosity for electricity, electronic components fascinate me, its a mix of math, chemistry and physics which makes it diverse and fun</p>
            </div>
            <div className="who__image hidden">
                <img className="who__image-img" src={image} alt="" />
            </div>
        </div>
    )
}

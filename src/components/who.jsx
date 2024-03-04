import React from "react";
import image from "/who.jpeg"

export default function Who(){
    return(
        <div className="who">
            <div className="who__text">
                <h3>Who I am 🗿</h3>
                <br />
                <p>Hello! I'm Munib Sondak, self-taught programmer and electronics hobbyist.</p>
                <br />
                <p>In the last few years, I taken keen interest in programming and im quite proficient. i am self taught and quite confident in my abilities to handle the many challenges that programming presents.</p>
                <br />
                <p>in addition, i have always had a hungry curiosity for electricity, electronic components fascinate me, its a mix of math, chemistry and physics which makes it diverse and fun</p>
            </div>
            <div className="who__image">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

import React from "react";
import image from "/who.jpeg"

export default function Who(){
    return(
        <div className="who">
            <div className="who__text">
                <h3>Who I am 🗿</h3>
                <br />
                <p>Hello! Im Munib Sondak, self-taught programmer and electronics hobbiest</p>
                <br />
                <p>a few years ago i decided to take on programming as a career and sooner than i thought, i became who i am today</p>
                <br />
                <p>In addition i was facinated by electricity and small electronic components, simple bits of silicon power such crazy items in our lives</p>
            </div>
            <div className="who__image">
                <img src={image} alt="" />
            </div>
        </div>
    )
}
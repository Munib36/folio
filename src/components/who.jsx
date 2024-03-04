import React from "react";
import image from "/who.jpeg"

export default function Who(){
    return(
        <div className="who">
            <div className="who__text">
                <h3>Who I am 🗿</h3>
                <br />
                <p>Hey, I'm munib sondak, a canadian web devleoper on a journey fueled by curiosity and .</p>
                <br />
                <p></p>
                <br />
                <p>The thing is, the spark of electricity and the otherworldly magic of tiny electronic components never ceases to captivate my hungry, ginormous appetite for such interesting topics. It can crack someone's noggin on how these simple bits of silicon can power the incredible gadgets we use every day.</p>
            </div>
            <div className="who__image">
                <img src={image} alt="" />
            </div>
        </div>
    )
}
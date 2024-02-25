import React from "react";
import image from "/who.jpeg"

export default function Who(){
    return(
        <div className="who">
            <div className="who__text">
                <h3>Who I am 🗿</h3>
                <br />
                <p>Hello! I'm Munib Sondak, self-taught programmer and electronics hobbyist!</p>
                <br />
                <p>In the last few years, I departed into the rabbit hole of the world of programming and became the accustomed and skillful program cracker I am today! </p>
                <br />
                <p>The thing is, the spark of electricity and the otherworldly magic of tiny electronic components never ceases to captivate my hungry, ginormous appetite for such interesting topics. It can crack someone's noggin on how these simple bits of silicon can power the incredible gadgets we use every day.</p>
            </div>
            <div className="who__image">
                <img src={image} alt="" />
            </div>
        </div>
    )
}
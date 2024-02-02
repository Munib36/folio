import image from "/waving-hand.jpg"

export default function About(){
    
    return(
        <div className="about" id="about">
            <div className="about__hi"><h1>Hi!</h1> <img src={image} /></div>
            <h1>I'm Munib Sondak</h1>
            <h2>Let's keep it simple and awesome!</h2>
            <h3>Self-taught Programmer & Junior Front-End Developer with a passion for bikes.</h3>
            <div className="about__buttons-container">
                <button className="about__buttons--buttons">LinkedIn</button>
                <button className="about__buttons--buttons">Github</button>
                <button className="about__buttons--buttons">Mail</button>
            </div>
        </div>
    )
}
import image from "/waving-hand.jpg"

export default function About(){
    
    return(
        <div className="about">
            <div className="about__hi"><h1>Hi!</h1> <img src={image} /></div>
            <h1>I'm Munib Sondak</h1>
            <h2>Let's keep it simple and awesome!</h2>
            <h3>Self-taught Programmer & Junior Front-End Developer with a passion for bikes.</h3>
        </div>
    )
}
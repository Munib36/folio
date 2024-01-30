import image from "/waving-hand.jpg"

export default function About(){
    
    return(
        <div className="about">
            <div className="about__hi"><h1>Hi!</h1> <img src={image} /></div>
        </div>
    )
}
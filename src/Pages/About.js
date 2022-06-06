import "../css/bootstrap.min.css"
import "../css/about.css"

import profile from "../assets/me_casual.jpg"
const About = props => (
    <div className="my-2 container">
        <div className="about-wrapper w-100 ">
                <div className="about-content text-light">
                <h1 className="display-1 big-title">hi<span>!</span></h1>
                <h5 className="display-6">I am Adnan Malik</h5>
                <div>
                <p>I am Adnan Malik. I am basically a seasonal Graphic Desginger and MERN Developer. Currently my dream and my ambitious to become a 3.O Developer learning BlockChain Technlogy and all that hype stuff!</p>
                    <p>Spider News is one of my projects to domonstrate what can I do!!!</p>
                </div>
                <ul className="icons nav ">
                        <li><i className="fa fa-facebook-f"></i></li>
                        <li><i className="fa fa-twitter"></i></li>
                        <li><i className="fa fa-linkedin"></i></li>
                        <li><i className="fa fa-instagram"></i></li>
                    </ul>
                </div>
                <div className="image-wrapper">
                <div className="about-img-box rounded-50"> 
                    <img src={profile} alt="Adnan Malik" className="rounded-circle" />
                </div>
                </div>
                
        </div>



    </div>

)

export default About
/**
 * <div className="about-left">
                <div className="about-left-content">
                    <div>
                        <div className="shadow">
                            <div className="about-img">
                                <img src={profile} alt="Adnan Malik"/>
                            </div>
                        </div>

                        <h2 className="text-light">Adnan<br/>Malik</h2>
                        <h3 className="text-light">MERN Developer</h3>
                    </div>

                    <ul className="icons">
                        <li><i className="fa fa-facebook-f"></i></li>
                        <li><i className="fa fa-twitter"></i></li>
                        <li><i className="fa fa-linkedin"></i></li>
                        <li><i className="fa fa-instagram"></i></li>
                    </ul>
                </div>
            </div>

            <div className="about-right bg-white">
                <h1>hi<span>!</span></h1>
                <h2>Here's who I am & what I do</h2>
                <div className="about-butns">
                    <button type="button" className="butn butn-pink">resume</button>
                </div>

                <div className="about-para">
                    <p>I am Adnan Malik. I am basically a seasonal Graphic Desginger and MERN Developer. Currently my dream and my ambitious to become a 3.O Developer learning BlockChain Technlogy and all that hype stuff!</p>
                    <p>Spider News is one of my projects to domonstrate what can I do!!!</p>
                </div>
            </div>
 */
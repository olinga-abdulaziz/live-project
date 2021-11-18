import me from '../Images/image3.png'
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Home() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return (
    <div className="container">
        <div className="content-wrapper">
            <div className="content-box" data-aos="fade-up">
            <h5>Hi am</h5>
            <h1>Oling`a</h1>
            <p>Am a full-stack web developer, i build successfull web-app and native mobile applications with cool features and much more</p>
            <div><a href="#portfolio" ><button className="btn btn-success">Get started</button></a></div>
            </div>
            <div className="content-box">
                <img className="my-image" src={me} alt="abdulaziz olinga said" data-aos="fade-left" />
            </div>
        </div>
        <div className="empty-mobile">
            <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
        </div>
    </div> 
    );
}

export default Home;
import me from '../Images/image3.png'
import Aos from 'aos'
import "aos/dist/aos.css";
import Portfolio from '../Components/Portfolio'
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
            <h1 style={{display:"none"}}>abdulaziz olinga</h1>
            <h1 style={{display:"none"}}>abdulaziz</h1>
            <h1 style={{display:"none"}}>olinga</h1>
            <h1>Oling`a</h1>
            <p>Am a full-stack web developer, i build successfull web-app and native mobile applications with cool features and much more</p>
            <div><a href="#portfolio" ><button className="btn btn-success">Get started</button></a></div>
            </div>
            <div className="content-box">
            <h1 style={{display:"none"}}>abdulaziz olinga</h1>
                <img className="my-image" src={me} alt="abdulaziz olinga said" data-aos="fade-left" />
            </div>
        </div>
        <div className="empty-mobile">
            <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
            <h1 style={{display:"none"}}>abdulaziz olinga</h1>
        </div> 
      <section>
      <div className="portfolio" id="portfolio">
        <div className="container">
        <h1 style={{display:"none"}}>abdulaziz olinga</h1>
         <Portfolio />
        </div>
      </div>
      </section>
    </div> 
    
    );
}

export default Home;
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
function About() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return ( 
    
    <div className="full-page" data-aos="fade-up">
        <div className="container" >
            <div className="about-title-div">
            <center><h1 className="about-title1">Am a full-stack web developer i build successfull web application</h1></center>
            </div>
            <div className="about-content">
            <div className="container" >
                <p>
                    Am a full-stackweb developer i build  web developer i
                     build successfull web application
                     stackweb developer i build  web developer developer i build  web developer 
                     </p>
            </div>
            <br />
            <div className="about-card-div">
                <div className="card card-about" data-aos="fade-right">

                </div>

                 <div className="card card-about" data-aos="fade-right">
                    
                </div>

                <div className="card card-about" data-aos="fade-left">
                    
                </div>

                <div className="card card-about" data-aos="fade-left">
                    
                </div>
            </div>

            <div className="about-addition-story" data-aos="fade-left">
                
                <p>
                    Am a full-stackweb developer i build  web developer i
                     build successfull web application
                     stackweb developer i build  web developer developer i build  web developer 
                     web application
                     stackweb developer i build  web developer developer i build  web developer
                     developer i build  web developer
                     successfull web application
                     stackweb developer i build  web developer developer i build  web developer 
                     web application
                     stackweb developer i build  web developer developer i build  web developer
                     developer i build  web developer
                </p>
            </div>

            </div>
        </div>
    </div> 
    
    );
}

export default About;
import me from '../Images/image3.png'
import Aos from 'aos'
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';
import Portfolio from '../Components/Portfolio'
import { useEffect } from 'react';
function Home() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return (
    <div className="container">
                  <Helmet>
      <title>Abdulaziz olinga| Home-Full-stack web developer</title>
      <meta name="description" content="About Abdualziz olinga`a said . I am a full-stack web developer with muximum experience, ibuild successfull web applications ." />
      <meta name="keywords" content="Abdualziz,abdul,saidi,said,olinga,olinga`a,full-stack,full-stack web developer,full-stack web developer kenya,software,software engeneer kenya,best fullstack developer in kenya,developers in kenya,backend,frontend,web,web developer,web developer in nairobi,nairobi best web developer,abdul developer,web devs in kenya,web dev in malaba,emobilis mobile institute,emobilis devs,developers from emobilis,talented codder,dev,react developer in kenya,django developer,who is best in django kenya,javascript developer,abdul hakim,abdul haji,abdulaziz,abdulaziz bilsalman alsaud,abdulaziz al-omari,abdulaziz billow,abdulaziz international school " />
      <meta itemprop="name" content="Abdulaziz oling`a" />

      <meta property="og:url" content="https://www.abdulazizolinga.ga" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Abdulaziz oling`a" />
      <meta property="og:description" content="Abdualzi olinga`a said . I am a full-stack web developer with muximum experience, ibuild successfull web applications ." />
      <meta property="og:image" content="https://media-exp1.licdn.com/dms/image/C4D22AQFKQBvMYCQC9w/feedshare-shrink_2048_1536/0/1635775551216?e=1639008000&v=beta&t=A3zRAIMxjOy19on7goNh6Aba9uZgumNbKpff0LG9I8w" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Abdulaziz oling`a" />
      <meta name="twitter:description" content="Abdualzi olinga`a said . I am a full-stack web developer with muximum experience, ibuild successfull web applications ." />
      <meta name="twitter:image" content="https://media-exp1.licdn.com/dms/image/C4D22AQFKQBvMYCQC9w/feedshare-shrink_2048_1536/0/1635775551216?e=1639008000&v=beta&t=A3zRAIMxjOy19on7goNh6Aba9uZgumNbKpff0LG9I8w" />

    </Helmet>
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
      <section>
      <div className="portfolio" id="portfolio">
        <div className="container">
         <Portfolio />
        </div>
      </div>
      </section>
    </div> 
    
    );
}

export default Home;
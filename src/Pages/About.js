import Aos from 'aos'
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
function About() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return ( 
    
    <div className="full-page" data-aos="fade-up">
              <Helmet>
      <title>Abdulaziz olinga | About</title>
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
        <div className="container" >
            <div className="about-title-div">
            <h1 style={{display:"none"}}>abdulaziz olinga</h1>
            <center><h1 className="about-title1">Am a full-stack web developer i build successfull web application</h1></center>
            </div>
            <div className="about-content">
            <div className="container" >
            <h1 style={{display:"none"}}>abdulaziz olinga</h1>
                <p>
                    Am here to make world a better place . i use multiple technologies to build successfull web application so that to enhance comfortable user experince on the platform
                </p>
            </div>
            <br />
            <div className="about-card-div">
                <div className="card card-about" data-aos="fade-right">
                    <div className="card-header">
                        <h5>DBMS <i class="fa fa-database" aria-hidden="true"></i></h5>
                    </div>
                    <div className="card-body">
                         Mysql <br />
                         Sql-lite <br />
                         Mongo db <br />
                    </div>
                </div>

                 <div className="card card-about" data-aos="fade-right">
                 <div className="card-header">
                        <h5>Virsion CNTR <i class="fas fa-code-branch "></i> </h5>
                    </div>
                    <div className="card-body">
                         <p>Github</p>
                    </div>
                </div>

                <div className="card card-about" data-aos="fade-left">
                     <div className="card-header">
                        <h5>Libraries <i class="fab fa-uikit"></i> </h5>
                    </div>
                    <div className="card-body">
                         <p>Bootstrap</p>
                         <p>Material UI</p>
                    </div>
                </div>

                <div className="card card-about" data-aos="fade-left">
                <div className="card-header">
                        <h5>Icons UI <i class="fa fa-circle-o" aria-hidden="true"></i> </h5>
                    </div>
                    <div className="card-body">
                         <p>Fontawesome</p>
                         
                    </div>
                </div>
            </div>
            <h1 style={{display:"none"}}>abdulaziz olinga</h1>
            <div className="about-addition-story" data-aos="fade-left">
                
                <p>
                   I join the valley of technology 5 years ago . i develope programming interest as i was in high school ,, from then strated writting some small computer programme that adds two numbers and perform some small task .
                   I rember i wrote my firts hello world statement in batch programming where by i only use to type one line of code in notepad and it get compiled by the computer itself
                   i had no idea what process goes on so when my programme execute at that time..
                </p>
                <p data-aos="fade-up">
                    Whe ni was in form two ,our school hosted a science concress programme and some students in our school paticipate . two of my friends 
                    had a computer project of wich they were to develop automatic computerised door . i was suprised with how that was going to be possible until they told me that they are going 
                    to have computer programme that will make things easy .. and the reaaly innspire me on today world technology .. 
                </p>
                <p>After i was done with high school i join <a href="https://www.emobilis.ac.ke" >eMobilis mobile techonlogy institute</a> where i learn the basic of programming and much more</p>
            </div>
            <h1 style={{display:"none"}}>abdulaziz olinga</h1>
            </div>
        </div>
    </div> 
    
    );
}

export default About;
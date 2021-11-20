import Aos from 'aos'
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Contact() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return ( 
    
    <div className="full-page" data-aos="fade-up">
                           <Helmet>
      <title>Abdulaziz olinga| Contact</title>
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
      <div className="container co" >
          <div className="contact-cup">
              <div>         <h1 style={{display:"none"}}>abdulaziz olinga</h1>
                            <h1> I`m here</h1>
                            <p>let us talk share your comment and let us connnect and work together am here for you</p>
                            <div className="form-group">
                                <form>
                                    <div  className="contact-input-div">
                                    <h1 style={{display:"none"}}>abdulaziz olinga</h1>
                                            <div>
                                                <label>Full names :</label>
                                                <br />
                                                <input type="text" placeholder="enter full names ..." className="form-control" />
                                            </div>
                                            
                                            <div>
                                                <label>Email :</label>
                                                <br />
                                                <input type="email" placeholder="enter email ..." className="form-control email" />
                                            </div>
                                    </div>
                                    <br />
                                    <div>       <h1 style={{display:"none"}}>abdulaziz olinga</h1>
                                                <label>your message :</label>
                                                <br />
                                                <input type="text"  className="form-control message" />
                                            </div>
                                            <br /><br />  
                                    <div>
                                       <Link to="/success" ><button  className="btn btn-success">Submit</button></Link>
                                    </div>
                                </form>
                            </div>
              </div>

              <div className="my-location">
                    <h3>Address</h3>
                    <hr />
                    <p>
                        <strong>Country</strong> : Kenya <br />
                        <strong>County</strong> :  Nairobi <br />
                        <strong>Sub-location</strong> : Embakasi east tasia <br />
                        <strong>Estate</strong> :  Nyayo estate <br />
                        <strong>Email</strong> :  abdulazizolinga17@gmail.com <br />
                        <strong>Phone</strong> :  +254769210601 <br />
                    </p>
                    <div className="contact-social-div">
                    <a href="https://web.facebook.com/abdulziz.o.saidi/" title="facebook abdulaziz olinga"><i class="fab fa-facebook-square"></i></a>
                    <a href="https://twitter.com/OlingaAbdul" title="twitter abdulaziz olinga"><i class="fab fa-twitter-square"></i></a>
                    <a href="https://www.instagram.com/abdulziz_syd/" title="instagram abdulaziz olinga"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.instagram.com/abdulziz_syd/" title="instagram abdulaziz olinga"><i class="fab fa-github-square"></i></a>
                    <a href="https://www.pinterest.com/abdulazizolinga/_saved/" title="pinterest abdulaziz olinga"><i class="fab fa-pinterest-square"></i></a>
                    </div>
                    <h1 style={{display:"none"}}>abdulaziz olinga</h1>
              </div>
          </div>
          <h1 style={{display:"none"}}>abdulaziz olinga</h1>
      </div>
    </div>
    
    );
}

export default Contact;
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Contact() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return ( 
    
    <div className="full-page" data-aos="fade-up">
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
                    <a href="https://web.facebook.com/abdulziz.o.saidi/"><i class="fab fa-facebook-square"></i></a>
                    <a href="https://twitter.com/OlingaAbdul"><i class="fab fa-twitter-square"></i></a>
                    <a href="https://www.instagram.com/abdulziz_syd/"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.instagram.com/abdulziz_syd/"><i class="fab fa-github-square"></i></a>
                    <a href="https://www.pinterest.com/abdulazizolinga/_saved/"><i class="fab fa-pinterest-square"></i></a>
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
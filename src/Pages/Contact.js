import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Contact() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return ( 
    
    <div className="full-page" data-aos="fade-up">
      <div className="container co" >
          <div className="contact-cup">
              <div>
                            <h1> I`m here</h1>
                            <p>let us talk short story here that will taje their piece of attention</p>
                            <div className="form-group">
                                <form>
                                    <div  className="contact-input-div">
                                            <div>
                                                <label>Full names :</label>
                                                <br />
                                                <input type="text" placeholder="enter full names ..." className="form-control" />
                                            </div>
                                            
                                            <div>
                                                <label>Email :</label>
                                                <br />
                                                <input type="email" placeholder="enter full email ..." className="form-control email" />
                                            </div>
                                    </div>
                                    <br />
                                    <div>
                                                <label>your message :</label>
                                                <br />
                                                <input type="text"  className="form-control message" />
                                            </div>
                                            <br /><br />  
                                    <div>
                                        <button type="submit" className="btn btn-success">Submit</button>
                                    </div>
                                </form>
                            </div>
              </div>

              <div className="my-location">
                    <h3>location</h3> <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <hr />
                    <p>
                        <strong>Country</strong> : Kenya <br />
                        <strong>County</strong> :  Nairobi <br />
                        <strong>Sub-location</strong> : Embakasi east tasia <br />
                        <strong>Estate</strong> :  Nyayo estate <br />
                    </p>
                    <div className="contact-social-div">
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-instagram-square"></i>
                    <i class="fab fa-pinterest-square"></i>
                    </div>
              </div>
          </div>

      </div>
    </div>
    
    );
}

export default Contact;
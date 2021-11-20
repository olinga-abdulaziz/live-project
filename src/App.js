import './App.css';
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Home from './Pages/Home';
import me from './Images/image1.png'
import Footer from './Components/footer';
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Success from './Pages/Success';

function App() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  
  const showSidebarHandler=()=>{
      const sidebar=document.querySelector(".closeSidebar");
      const wrapper=document.querySelector(".hideWrapper");
      sidebar.classList.remove("closeSidebar");
      sidebar.classList.add("show-sidebar");
      wrapper.classList.add("showWrapper")
  }

  

  const closeSidebar =()=>{
      const sidebar=document.querySelector(".show-sidebar");
      const wrapper=document.querySelector(".hideWrapper");
      wrapper.classList.remove("showWrapper")
      wrapper.classList.add("hideWrapper")
      sidebar.classList.add("closeSidebar");
  }
  return (
    <div className="App">
     <Router>
       <section>
          <div className="closeSidebar">
          <div className="hideWrapper">
        <div className="side-logo-div">
            <div>
                <i class="fas fa-tablets"></i>
            </div>
            <div>
                <i class="fa fa-times close" aria-hidden="true" onClick={closeSidebar}></i>
            </div>
        </div>
        <hr />
        <div className="side-content">
            <div className="side-img-div">
                <img src={me} alt="abdulaziz olinga said" className="me" />
            </div>
            <div className="side-links-div">
                <ul>
                    <li>
                        <Link onClick={closeSidebar} className="links" to="/" ><i class="fa fa-home" aria-hidden="true"></i>  Home</Link> 
                    </li>
                    
                    <li>
                        <Link onClick={closeSidebar} className="links" to="/blogs"><i class="fas fa-blog"></i> Blogs</Link>
                         
                    </li>
                    <li>
                         <Link onClick={closeSidebar} className="links" to="/about"><i class="fas fa-info-circle"></i> About</Link>
                        
                    </li>
                    <li>
                         <Link onClick={closeSidebar} className="links" to="/contact"><i class="far fa-address-book"></i> Contact</Link>
                    
                    </li>
                </ul>
            </div>
            <div>
              <center>
            <div className="social-sidedivs">
                <a href="https://web.facebook.com/abdulziz.o.saidi/"><i class="fab fa-facebook-square"></i></a>
                <a href="https://twitter.com/OlingaAbdul"><i class="fab fa-twitter-square"></i></a>
                <a href="https://www.instagram.com/abdulziz_syd/"><i class="fab fa-instagram"></i></a>
                <a href="https://www.pinterest.com/abdulazizolinga/_saved/"><i class="fab fa-pinterest-square"></i></a>
                </div></center>
            </div>
            <div>
              <hr />
              <center>
              <font><small>abdulazizolinga17@gmail.com</small></font>
              </center>
            </div>

        </div>
        </div>
    </div>
       </section>




      <section>
          <div className="navbar-container">
            <h1 style={{display:"none"}}>abdulaziz olinga</h1>
              <div className="navbar" data-aos="fade-up">
                <div className="logo-div">
                  <div> <i class="fas fa-stream menu-toggler" onClick={showSidebarHandler}></i></div>
                  <div className="lgDiv">
                     
                      <i class="fas fa-tablets logo"></i>
                      <Link to="/" className="link">
                      <h1 style={{display:"none"}}>abdulaziz olinga</h1>
                      <h1 className="brand"><strong className="abdul">abdul</strong> <strong className="aziz">aziz</strong></h1>
                      </Link>
                  </div>
                </div>
                
                <div className="nav-menu">
                  <ul>
                  <h1 style={{display:"none"}}>olinga</h1>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/blogs" className="link">Blogs</Link></li>
                    <li><Link to="/about" className="link">About</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                    <h1 style={{display:"none"}}>abdulaziz olinga</h1>
                    <li><a href="#portfolio" className="link"><button className="btn btn-success">Portfolio</button></a></li>
                  </ul>
                </div>
              </div>
          </div>
      </section>

      <section>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blogs" exact element={<Blogs />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/success" exact element={<Success />} />
      </Routes>
      </section>
      <section>
          <Footer />
      </section>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Home from './Pages/Home';
import Sidebar from './Components/Sidebar';
import Footer from './Components/footer';
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import Contact from './Pages/Contact';
import About from './Pages/About';
function App() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="App">
      
     <Router>
     <Sidebar />
      <section>
          <div className="navbar-container">
              <div className="navbar" data-aos="fade-up">
                <div className="logo-div">
                  <div> <i class="fas fa-stream menu-toggler"></i></div>
                  <div className="lgDiv">
                     
                      <i class="fas fa-tablets logo"></i>
                      <Link to="/" className="link">
                      <h1 className="brand"><strong className="abdul">abdul</strong> <strong className="aziz">aziz</strong></h1>
                      </Link>
                  </div>
                </div>
                
                <div className="nav-menu">
                  <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/about" className="link">About</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                   
                    <li><a href="#portfolio" className="link"><button className="btn btn-success">Portfolio</button></a></li>
                  </ul>
                </div>
              </div>
          </div>
      </section>

      <section>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/about" exact element={<About />} />
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

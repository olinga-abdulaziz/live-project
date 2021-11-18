import './App.css';
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Home from './Pages/Home';
import Portfolio from './Components/Portfolio';
import Footer from './Components/footer';
function App() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="App">
     
      <section>
          <div className="navbar-container">

              <div className="navbar" data-aos="fade-up">
                <div className="logo-div">
                <i class="fas fa-stream menu-toggler"></i>
                  <i class="fas fa-tablets logo"></i>
                  <h1 className="brand"><strong className="abdul">abdul</strong> <strong className="aziz">aziz</strong></h1>
                  <i class="fas fa-tablets logo1"></i>
                </div>
                
                <div className="nav-menu">
                  <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li><button className="btn btn-success">Portfolio</button></li>
                  </ul>
                </div>
              </div>
          </div>
      </section>

      <section>
          <Home />
      </section>

      <section>
      <div className="portfolio">
        <div className="container">
         <Portfolio />
        </div>
      </div>
      </section>

      <section>
          <Footer />
      </section>
    </div>
  );
}

export default App;

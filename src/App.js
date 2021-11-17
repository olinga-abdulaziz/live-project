import './App.css';
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Home from './Pages/Home';
function App() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="App">
     
      <section>
          <div className="navbar-container">

              <div className="navbar">
                <div className="logo-div">
                <i class="fas fa-stream menu-toggler"></i>
                  <i class="fas fa-tablets logo"></i>
                  <h1 className="brand"><strong className="abdul">Abdul</strong> <strong className="aziz">aziz</strong></h1>
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
    </div>
  );
}

export default App;

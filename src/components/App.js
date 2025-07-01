// import '../assets/App.css';
// import Nav from '../components/nav';
// import Hero from '../components/hero';
// import Intro_bio from '../components/intro_bio';
// import Carousel_component from './carousel';
// import Performer_reel from './performer_reel';
// import Contact_form from './contact_form';
// import Footer from './footer'

// function App() {
//   return (
//     <div>
//       <Nav/>
//       <div className="App">
//         <Hero/>
//         <Intro_bio/>
//         <Carousel_component/>
//         <Performer_reel/>
//         <Contact_form/>
//       </div>
//       <Footer/>
//     </div>
  
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../assets/App.css';
import Nav from '../components/nav';
import Hero from '../components/hero';
import Intro_bio from '../components/intro_bio';
import Carousel_component from './carousel';
import Performer_reel from './performer_reel';
import Contact_form from './contact_form';
import Footer from './footer';

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Intro_bio />
                <Carousel_component />
                <Performer_reel />
                <Contact_form />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
              <p>gallery</p>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <p>about</p>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <p>contact</p>
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;


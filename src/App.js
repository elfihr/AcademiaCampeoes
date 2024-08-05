
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './page/About';
import Contact from './page/Contact';
import Courses from './page/Courses';
import Hero from './page/Hero';
import Now from './page/Now';
import Plan from './page/Plan';
import Teacher from './page/Teacher';
import Testimonials from './page/Testimonials';

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Hero/> 
     <About/>
     <Courses/>
     <Plan/>
     <Teacher/>
     <Now/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;

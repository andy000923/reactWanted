import Footer from "../components/Footer.js";
import Navbar from '../components/navbars/Navbar';
import Padding from '../components/padding/Padding';
import SlideContainer from '../components/slideContainer/SlideContainer';
import Shortcut from "../components/Shortcut.js";
import Position from "../components/Position.js";
const Jobsfeed = () => {
  return (
  <div className="App">    
    <Navbar/>
    <Padding/>
    <SlideContainer />   
    <Shortcut/> 
    <Position/>
    <Footer/>
  </div>
  );
}

export default Jobsfeed;
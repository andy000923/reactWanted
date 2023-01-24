import Footer from "../components/Footer.js";
import Navbar1 from '../components/navbars/Navbar1';
import Padding from '../components/padding/Padding';
import SlideContainer from '../components/slideContainer/SlideContainer';
import Shortcut from "../components/Shortcut.js";
import Position from "../components/Position.js";
const Jobsfeed1 = () => {
  return (
  <div className="App">    
    <Navbar1/>
    <Padding/>
    <SlideContainer />   
    <Shortcut/> 
    <Position/>
    <Footer/>
  </div>
  );
}

export default Jobsfeed1;
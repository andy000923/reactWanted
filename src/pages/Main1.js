import Footer from "../components/Footer.js";
import Navbar1 from '../components/navbars/Navbar1';
import Padding from '../components/padding/Padding';
import SlideContainer2 from "../components/slideContainer/SlideContainer2.js";
import Section from "../components/Section.js";
const Main1 = () => {
  return (
  <div className="App">    
    <Navbar1/>
    <Padding/>
    <SlideContainer2 />   
    <Section/>
    <Footer/>
  </div>
  );
}

export default Main1;
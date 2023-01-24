import Footer from "../components/Footer.js";
import Navbar from '../components/navbars/Navbar';
import Padding from '../components/padding/Padding';
import SlideContainer2 from "../components/slideContainer/SlideContainer2.js";
import Section from "../components/Section.js";
const Main = () => {
  return (
  <div className="App">    
    <Navbar/>
    <Padding/>
    <SlideContainer2 />   
    <Section/>
    <Footer/>
  </div>
  );
}

export default Main;
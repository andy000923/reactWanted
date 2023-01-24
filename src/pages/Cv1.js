import Footer from "../components/Footer.js";
import Navbar1 from '../components/navbars/Navbar1';
import Resume from "../components/resume.js";
import Padding from '../components/padding/Padding';
const Cv1 = () => {
  return (
  <div className="App">    
    <Navbar1/>
    <Padding/>
    <Resume/>
    <Footer/>
  </div>
  );
}

export default Cv1;
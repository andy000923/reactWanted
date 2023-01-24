import Footer from "../components/Footer.js";
import Navbar from '../components/navbars/Navbar';
import Resume from "../components/resume.js";
import Padding from '../components/padding/Padding';
const Cv = () => {
  return (
  <div className="App">    
    <Navbar/>
    <Padding/>
    <Resume/>
    <Footer/>
  </div>
  );
}

export default Cv;
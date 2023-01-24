import Footer from "../components/Footer.js";
import Navbar from '../components/navbars/Navbar';
import EventImage from "../components/eventimage";
import Padding from '../components/padding/Padding';
const Events = () => {
  return (
  <div className="App">    
    <Navbar/>
    <Padding/>   
    <EventImage/>
  </div>
  );
}

export default Events;
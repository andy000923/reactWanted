import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "../pages/Main.js";
import Main1 from "../pages/Main1.js";
import Jobsfeed from '../pages/Jobsfeed.js';
import Jobsfeed1 from '../pages/Jobsfeed1.js';
import Cv from "../pages/Cv.js";
import Cv1 from "../pages/Cv1.js";
import Events from "../pages/Event.js";
import Community from "../pages/Community.js";
import Signup from "../components/Signup";
const RootRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/1' element={<Main1/>} />
                <Route path='/jobsfeed' element={<Jobsfeed/>} />
                <Route path='/jobsfeed1' element={<Jobsfeed1/>} />
                <Route path='/cv' element={<Cv/>} />    
                <Route path='/cv1' element={<Cv1/>} />
                <Route path='/events' element={<Events/>} />
                <Route path='/events1' element={<Events/>} />
                <Route path='/community' element={<Community/>} />
                <Route path='/community1' element={<Community/>} />
                <Route path='/signup' element={<Signup/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default RootRoute;
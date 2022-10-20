import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom"

function App() {
    return ( 
    <>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/discover" element={<Discover/>} />
            </Routes>
        </div>
    </>
    )
}

export default App;
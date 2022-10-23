import Navbar from "./components/Navbar";
import './App.css'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Discover from "./pages/Discover";
import {Route, Routes} from "react-router-dom";
import Footer from './components/footer';
import { ImportExport } from "@mui/icons-material";

function App() {
    return ( 
    <>
    <header>
        <Navbar/>
    </header>
    <main class='App-header'>
        <p>Sample</p>
    </main>
    <div className="container">
        <Routes>
            <Route path="/"/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/discover" element={<Discover/>} />
        </Routes>
    </div>
    <footer>
        <Footer/>
    </footer>
    </>
>>>>>>> eaf71812ab9b71c3783f7b8db9b05ca07d617f69
    )
}
export default App;

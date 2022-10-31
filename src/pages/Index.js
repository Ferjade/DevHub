import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './home'
import About from './About'
import Contact from './Contact'
import Discover from './Discover'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

const Index = () => {
    return (
    <>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/Discover" element={<Discover/>} />
            </Routes>
        </div>
        <Footer/>
    </>
    )
}

export default Index
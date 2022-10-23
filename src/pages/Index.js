import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Discover from './Discover'
import Navbar from '../components/Navbar'

const Index = () => {
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

export default Index
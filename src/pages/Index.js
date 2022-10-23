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
        <main class='App-header'>
            <p>Sample</p>
        </main>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/discover" element={<Discover/>} />
            </Routes>
        </div>
        <Footer/>
    </>
    )
}

export default Index
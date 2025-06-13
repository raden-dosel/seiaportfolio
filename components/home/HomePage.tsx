import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Services from './Services'
import Projects from './Projects'
import Testimonial from './Testimonial'
import Stats from './Stats'
import Choose from './Choose'
import Footer from './Footer'
import Contact from './Contact'

const HomePage = () => {
  return (
    <>
        {/* Nav */}
        <Nav/>
        {/* Hero Section */}
        <Hero/>
        { /* Stats */ }
        <Stats />
        { /* Services */ }
        <Services />
        { /* Projects */ }
        <Projects />
        { /* Testimonials */ }
        <Testimonial />
        { /* Choose Us */ }
        <Choose />
        {/* Contact */}
        <Contact/>
        { /* Footer */ }
        <Footer />
    </>
  )
}

export default HomePage

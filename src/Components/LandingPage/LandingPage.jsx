import React from 'react'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Pricing from './Sections/Pricing'
import ContactUs from './Sections/ContactUs'

export default function LandingPage() {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Hero />
            <About />
            <Pricing />
            <ContactUs />
        </div>
    )
}

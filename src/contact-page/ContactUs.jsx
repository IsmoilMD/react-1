import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <div>
            <div className='contact-btn'>
                <button className='main-button'>Browse All</button>
            </div>
            <div className='back-image'>
                <p className='contact-paragraph'>Owners continue to thrive.</p>
                <div className='contact-heading'>
                    <h2 className='contact-heading-wrapper'>When it comes to what we know about car</h2>
                    <h2 className='contact-heading-wrapper'>care, few others can compete.</h2>
                    <button className='main-button'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
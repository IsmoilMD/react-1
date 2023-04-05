import React from 'react'
import "./Footer.css"
import logoFooter from "../footer/logo.svg"
import facebook from "../footer/facebook.svg"
import twitter from "../footer/twitter.svg"
import instagram from "../footer/instagramm.svg"

const Footer = () => {
    return (
        <div>
            <footer className='footer-container'>
                <div className='footer-card'>
                    <img src={logoFooter} alt="" />
                    <p className='footer-paragraph'>With over 50 years in the auto repair industry, we have a network of successful franchisees.</p>
                </div>
                <div className='footer-card1'>
                    <h2 className='footer-heading'>Services</h2>
                    <p className='footer-paragraph'>Automate service</p>
                    <p className='footer-paragraph'>Computer software</p>
                    <p className='footer-paragraph'>Human recognation</p>
                    <p className='footer-paragraph'>Operations</p>
                </div>
                <div className='footer-card1'>
                    <h2 className='footer-heading'>About</h2>
                    <p className='footer-paragraph'>Our Story</p>
                    <p className='footer-paragraph'>Benefits</p>
                    <p className='footer-paragraph'>Team</p>
                    <p className='footer-paragraph'>Careers</p>
                </div>
                <div className='footer-card1'>
                    <h2 className='footer-heading'>Contact</h2>
                    <p className='footer-paragraph'>9, Ziyolilar str., M.Ulugbek district, 100170 Tashkent, Uzbekistan</p>
                    <p className='footer-paragraph'>+998 71 289-99-99</p>
                    <p className='footer-paragraph'>+998 71 269-00-58 (Fax)</p>
                    <p className='footer-paragraph'>info@inha.uz</p>
                </div>
            </footer>
            <footer className='second-footer'>
                <div className='last-footer'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='second-footer1'>
                    <img className='last-icon' src={facebook} alt="" />
                    <img className='last-icon' src={twitter} alt="" />
                    <img className='last-icon' src={instagram} alt="" />
                </div>
            </footer>
        </div>
    )
}

export default Footer
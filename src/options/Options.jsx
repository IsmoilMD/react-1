import React from 'react'
import "./Options.css"

const Options = () => {
    return (
        <div className='options'>
            <div className='main-option'>
            <div className='main-blur'>
                <div className='heading-frame'>
                    <h2 className='option-heading'>We will do everything we’ve promised and more to ensure</h2>
                </div>
            </div>
            </div>
           
            <div className='second-page'>
                <h2 className='second-heading'>We are with you every step of way.</h2>
                <p className='second-paragraph'>Now it’s time for both of us to make sure it’s a good fit. We’ve developed a mutual evaluation process that lets us both learn more about each other and make an informed decision about your future.</p>
                <h3>Automotive systems</h3>
                <h3>Customer service</h3>
                <h3>Computer software</h3>
                <h3>Sales</h3>
                <h3>Operations</h3>
                <h2 className='human-resources'>Human resources</h2>
                <button className='main-button'>Browse All</button>
            </div>
        </div>
    )
}

export default Options
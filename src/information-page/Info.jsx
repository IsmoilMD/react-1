import React from 'react'
import "./Info.css"
import contactImg from "./icon-1.svg"
import locationImg from "./icon-2.svg"
import hoursImg from "./icon-3.svg"

const Info = () => {
    const info = [
        {
            id: 1,
            image: contactImg,
            name: "Contact",
            number: "+99891 999-99-99",
            email: "companyname@info.com"
        },
        {
            id: 2,
            image: locationImg,
            name: "Location",
            adress: "440 S. Church Street, Suite 700, Charlotte, NC 28202"
        },
        {
            id: 3,
            image: hoursImg,
            name: "Open hours",
            date: "Mon - Fri: 8:00am to 5:00pm Sut - Sun: Close"
        }
    ]
  return (
    <div className='cards'>
        {
            info.map(infos => 
                <div className='info-card'>
                    <div className='info-icons'><img src={infos.image} alt="" /></div>
                    <div>
                      <h2 className='card-heading'>{infos.name}</h2>
                      <p className='card-paragraph'>{infos.number}</p>
                      <p className='card-paragraph'>{infos.email}</p>
                      <p className='card-paragraph'>{infos.adress}</p>
                      <p className='card-paragraph'>{infos.date}</p>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Info
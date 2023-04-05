import React from 'react'
import "./Brand.css"
import brand1 from "./idexxx.png"
import brand2 from "./onapsis.png"
import brand3 from "./bose.png"
import brand4 from "./mcAfee.png"
import brand5 from "./ADVANTMED.png"
import brand6 from "./ASSEMBLY.png"
import brand7 from "./APPNETA.png"
import brand8 from "./Forescout.png"
import brand9 from "./johnson.png"
import brand10 from "./dtex.png"
import brand11 from "./VITALIA.png"
import brand12 from "./sight.png"

const Brand = () => {
    const brands = [
        {
            id: 1,
            image: brand1
        },
        {
            id: 2,
            image: brand2
        },
        {
            id: 3,
            image: brand3
        },
        {
            id: 4,
            image: brand4
        },
        {
            id: 5,
            image: brand5
        },
        {
            id: 6,
            image: brand6
        },
        {
            id: 7,
            image: brand7
        },
        {
            id: 8,
            image: brand8
        },
        {
            id: 9,
            image: brand9
        },
        {
            id: 10,
            image: brand10
        },
        {
            id: 11,
            image: brand11
        },
        {
            id: 12,
            image: brand12
        }
    ]
  return (
    <div className='card-brand'>
        {
            brands.map(brand =>
              <div className='brand-card'>
                <img className='brands-image' src={brand.image} alt="" />
              </div>    
            )
        }
    </div>
  )
}

export default Brand
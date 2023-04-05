import React from 'react'
import "./FooterSmall.css"
import cardImg1 from "./image-1.png"
import cardImg2 from "./image-2.png"
import cardImg3 from "./image-3.png"
import cardImg4 from "./image-4.png"
import cardImg5 from "./image-5.png"
import cardImg6 from "./image-6.png"
import cardImg7 from "./image-7.png"
import cardImg8 from "./image-8.png"

const FooterSmall = () => {
    const products = [
        {
            id: 1,
            image: cardImg1,
            name: "Brakes & Brake Repair",
            description: "From the brake pedal to hydraulic brake fluid, brake master cylinder to power brake booster, drum brakes to disc brakes and electronic anti-lock brake sensors, Midas technicians know every part of your brake system inside and out and can perform brake",
            link: "https://www.mercedes-benz.com"
        },
        {
            id: 2,
            image: cardImg2,
            name: "Oil Change",
            description: "Oil is the lifeblood of your engine. It reduces friction, lessens wear, provides lubrication, forms a seal between the pistons, rings and cylinder walls while helping to cool engine parts. Without the cleaning action of new oil, carbon and varnish buildup would be toxic.",
            link: "https://www.mercedes-benz.com"
        },
        {
            id: 3,
            image: cardImg3,
            name: "Exhaust System Services",
            description: "You may think your car’s exhaust system is designed only to reduce noise, but it is also responsible for reducing harmful emissions from entering the atmosphere. Properly functioning mufflers and exhaust systems not only sound better, they are better – for you.",
            link: "https://www.mercedes-benz.com"
        },
        {
            id: 4,
            image: cardImg4,
            name: "Check Engine Light",
            description: "An illuminated check engine light means you should have your vehicle checked as soon as possible. Midas has the expertise to decipher check engine light codes, resolve the required maintenance or repair issues, and get your car on the road safely.",
            link: "https://www.mercedes-benz.com"
        },
        {
            id: 5,
            image: cardImg5,
            name: "Lights, Wipers & Accessories",
            description: "Our Midas technicians can help improve your visibility by inspecting windshield wiper blades, headlamps, turn signals, and brake lights, and by filling your windshield washer fluid.",
            link: "https://www.mercedes-benz.com"
        },
        {
            id: 6,
            image: cardImg6,
            name: "Steering & Suspension",
            description: "Utilizing the latest diagnostic equipment our Midas ASE-certified technicians can repair and/or maintain your steering system, car suspension, and wheel alignment to keep you and your vehicle on the road with a smooth ride.",
            link: "https://www.mercedes-benz.com"
        },
        {
            id: 7,
            image: cardImg7,
            name: "Belts & Hoses",
            description: "Sooner or later your car’s engine accessory drive belts, timing belts, and coolant hoses will dry out and crack. Regular inspections, coupled with timely automotive belt and hose replacement will help protect against roadside breakdowns and expensive repairs.",
            link: "https://www.mercedes-benz.com"
        },
        {
            id: 8,
            image: cardImg8,
            name: "Car A/C & Heating Repair",
            description: "Car AC systems have components that require love and attention to avoid drying out and cracking. The car heater also needs regular check-ups to make sure there are no leaky valves or blockages. Let your neighborhood Midas service your A/C.",
            link: "https://www.mercedes-benz.com"
        }
    ]
  return (
    <div className='container'>
        {
            products.map(product =>
              <div className='product-card'>
                <img className='photo' src={product.image} alt="" />
                <h2 className='product-title'>{product.name}</h2>
                <p className='product-paragraph'>{product.description}</p>
                <a className='product-link' target='_blanc' href={product.link}>Read more &#10513;</a>
              </div>  
            )
        }
    </div>
  )
}

export default FooterSmall
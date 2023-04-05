import React from 'react'
import "./Category.css"
import categoryImg1 from "./001-computer.svg"
import categoryImg2 from "./002-car-repair.svg"
import categoryImg3 from "./003-recovery.svg"
import categoryImg4 from "./004-truck.svg"

const Category = () => {
    const cardCat = [
        {
            id: 1,
            image: categoryImg1,
            name: "INDUSTRY-LEADING TOOLS",
            description: "Improve your collision center’s efficiency with our proprietary business management system and best-in-class solutions, helping you convert more customers, hit your KPIs."
        },
        {
            id: 2,
            image: categoryImg2,
            name: "UNBEATABLE BUYING POWER",
            description: "Find great deals through Driven Brands’ expansive network, and receive discounts and rebates from our 50+ preferred vendors."
        },
        {
            id: 3,
            image: categoryImg3,
            name: "THOROUGH TRAINING AND EDUCATION",
            description: "Attain the knowledge you and your team need to run a high-performing business with our robust training and education programs."
        },
        {
            id: 4,
            image: categoryImg4,
            name: "Consistent Revenue Growth",
            description: "With a Central Review team that will help you write more accurate estimates and meet your top-line KPIs, you can be confident your business is more efficient than ever."
        }
    ]
  return (
    <div className='main-category'>
        {
            cardCat.map(catCard =>
                <div className='category-card'>
                    <img src={catCard.image} alt="" />
                    <h2 className='category-heading'>{catCard.name}</h2>
                    <p className='category-paragraph'>{catCard.description}</p>
                </div>
            )
        }
    </div>
  )
}

export default Category
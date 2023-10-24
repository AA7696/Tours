import React from 'react'
import paris from '../assets/tour1.jpg'

const Tour = () => {
  return (
    <div className='tour-container'>
        <div className="img-wrapper">
            <img src={paris} alt="" />
            <div className="price">$19,95</div>
        </div>

        <div className="text-wrapper">
            <h3>Best Of Paris In 7 Days Tour</h3>
            <p>Paris is synonymous with the finest things that culture can offer — in art, fashion, food,
                 literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you 
                 in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums,
                  </p>

                <button class="btn">Not Interested</button>

        </div>
   

    </div>
  )
}

export default Tour

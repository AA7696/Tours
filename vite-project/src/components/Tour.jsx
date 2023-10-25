import React, { useState } from 'react'

const Tour = ({id, image, info, name, price, removeTour}) => {
  const [readmore, setReadmore] = useState(true)



  return (
    <div className='tour-container'>
        <div className="img-wrapper">
            <img src={image} alt="" />
            <div className="price">${price}</div>
        </div>

        <div className="text-wrapper">
            <h3>{name}</h3>
            <p>{readmore? info: `${info.substring(0,200)}`}
            <button className='read' onClick={()=>{setReadmore(!readmore)}}>readmore</button>
                  </p>

                <button class="btn" onClick={()=>{removeTour(id)}}>Not Interested</button>

        </div>
   

    </div>
  )
}

export default Tour

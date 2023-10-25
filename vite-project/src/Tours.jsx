import React from 'react'
import Tour from './components/tour'

const Tours = ({tours,removeTour }) => {
  return (
    <div className="tours">
    <h1>Our Tours</h1>

    <div className="tour-wrapper">
        {tours.map((tour) =>{
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}


    </div>
  </div>

  )
}

export default Tours

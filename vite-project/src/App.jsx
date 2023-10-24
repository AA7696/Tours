import { useState } from 'react'
import Tour from './components/tour'
import './App.css'

function App() {

  return (
    <div className="tours">
      <h1>Our Tours</h1>

      <div className="tour-wrapper">
        <Tour />
        <Tour />
        <Tour />
        <Tour />
        <Tour />
        <Tour />


      </div>
    </div>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom'

export const LandingView = () => {
  return (
    <div className='landing'>
        <div className='landing-content'>
            
            <h2>Price is what you pay. <br /> Value is what you get.</h2>
            <Link to='/buy' className='btn btn-warning'>Let's get Started</Link>
            
        </div>
    </div>
  )
}

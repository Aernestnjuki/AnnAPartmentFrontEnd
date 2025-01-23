import React from 'react'
import image from '../assets/apartment1.jpeg'
import { Link } from 'react-router-dom'

export const Rent = () => {
  return (
    <div className='container mt-5' id='buy'>
      <h3>Rent an Apartment</h3>
      <div className='row mt-3'>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="card">
            <img src={image} alt="" className="card-img-top rounded img-resposive" />
            <div className="card-body">
              <div className="card-title">Apartment1</div>
              <hr />
              <div className='card-text'>
                <div className="row">
                  <div className="col-md-6">
                    <i className="fa-solid fa-house"></i> Studio
                  </div>
                  <div className="col-md-6">
                    <i class="fa-solid fa-bed"></i> 2 
                  </div>
                  <div className="col-md-6">
                    <i className="fa-solid fa-dollar-sign"></i> $50 
                  </div>
                  <div className="col-md-6">
                    <i class="fa-solid fa-bath"></i> 2
                  </div>
                </div>
              </div>
            </div>
            <Link to='/property-info' className='btn btn-info'>View details</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

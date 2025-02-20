import React from 'react'

const Filter = () => {
  return (
    <div className="container" style={{width: "500px", margin: "20px auto"}}>
        <select className="form-select" aria-label="Default select example" style={{height: "50px"}}>
          <option selected>Filter Appartments</option>
          <option value="1">Studios</option>
          <option value="2">One Bedrooms</option>
          <option value="3">Two Bedrooms</option>
          <option value="3">Stand Alones</option>
        </select>
      </div>
  )
}

export default Filter
import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
   


    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container justify-content-between">
            <Link className="navbar-brand" to="/">
                Ann Apartments
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <div className="d-flex ms-auto">
                    
                </div>

                <ul className="navbar-nav   mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" id='#about-us' style={{color: "#fff"}}>

                        <i className="fa-solid fa-circle-info"></i> About Us
                        </Link>
                    </li>
                    
                      
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{color: "#fff"}}
                        >
                            <i className="fa-sharp fa-solid fa-apartment"></i> Properties
                        </a>
                        <ul className="dropdown-menu" style={{backgroundColor: 'crimson'}}>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    id='#buy'
                                    style={{color: "#fff"}}
                                >
                                    <i className="fa-solid fa-money-bill"></i> Buy
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" id='#rent' style={{color: "#fff"}}>
                                <i className="fa-solid fa-shop"></i> Rent
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" id='#blog' style={{color: "#fff"}}>

                        <i className="fa-solid fa-blog"></i> Blog
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" id='#contacts' style={{color: "#fff"}}>

                            <i className="fas fa-phone"></i> contacts
                        </Link>
                    </li>

                </ul>

                
                
            </div>

            
        </div>
    </nav>
  )
}

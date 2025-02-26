import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";

import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../assets/studio.jpeg"

const ProjectCard = ({color}) => {
  return (
    <div className="col-md-4 col-sm-12 single-project-item all-category">
                <div className="card">
                    <Link to="/project-detail">
                        <img className="card-img-top" style={{height: "240px"}}  src={image} alt="image" />
                    </Link>
                    <div className="card-body">
                        <span className="side-stick" style={{backgroundColor: color}}></span>
                        <h5 className="project-title text-truncate w-75 mb-0">Studios in Kileleshua </h5>
                        <p className="project-date font-12 text-muted">11 Jan 2025</p>
                        <div className="project-content">
                            <p className="project-inner-content text-muted">
                                <span><FaBed /> 0</span>
                                <span> </span>
                                <span><FaShower /> 1</span>
                                
                            </p>
                        </div>
                        <div className="d-flex align-items-center">
                            <Link to="/project-detail">
                            <span className="mr-1"><FaHouseUser style={{fontSize: "25px", cursor:"pointer", color: color}}/></span>
                            </Link>
                            
                            <small className='text-muted'> Studios </small>
                        </div>
                    </div>
                    
                </div>
            </div>
  )
}

export default ProjectCard
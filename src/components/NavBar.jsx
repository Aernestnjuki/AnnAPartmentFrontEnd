import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary py-50" style={{ padding: "20px" }}>
      <div className="container d-flex justify-content-around">
        <Link className="navbar-brand" to="/">
          <h4 style={{ fontWeight: "bold" }}>Makena Homes</h4>
        </Link>
        <div className="d-flex">
          <div
            className="input-group input-group-sm"
            style={{ width: "500px", height: "40px" }}
          >
            <input
              className="form-control"
              type="text"
              placeholder="Search for the best appartments"
              aria-label="Search "
            />
            <button className="btn btn-outline-success" type="submit">
              Search 
            </button>
          </div>
        </div>

        <Link to="/add-notes"  style={{ textDecoration: "none" }}>
          <button
            className="btn btn-outline-primary btn-md"
            type="button"
           
          >
            <FaFacebook />
          </button>
        </Link>

        <Link to="/add-notes"  style={{ textDecoration: "none" }}>
          <button
            className="btn btn-outline-primary btn-md"
            type="button"
           
          >
            <FaInstagram /> 
          </button>
        </Link>

        <Link to="/add-notes"  style={{ textDecoration: "none" }}>
          <button
            className="btn btn-outline-primary btn-md"
            type="button"
           
          >
            <CiLinkedin />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

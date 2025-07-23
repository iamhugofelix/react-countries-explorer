import { Link } from "react-router-dom";

export default function NavBar() {
  
    return (
      <div className="nav-bar-wrapper">
        <div className="nav-bar">
          <div className="logo">
            <Link to={"/"}>
              <img src="src/assets/logo.svg" alt="" />
            </Link>
          </div>
          <div className="links">
            <Link to={"/"} className="nav-item">
              Countries
            </Link>
            <Link to={"/regions"} className="nav-item">
              Regions
            </Link>
            <Link to={"/currencies"} className="nav-item">
              Currencies
            </Link>
          </div>
        </div>
      </div>
    );
}

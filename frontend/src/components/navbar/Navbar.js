import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar vh-10">
        <ul>
          <li>
            <Link to="/" className="btn btn-info w-75">
              Rólunk
            </Link>
          </li>
          <li>
            <Link to="/admin" className="btn btn-info w-75">
              Admin
            </Link>
          </li>
          <li>
            <Link className="btn btn-info w-75">Kisállataink</Link>
            <ul>
              <li>
                <Link to="/allatok" className="btn btn-info w-75">
                  Összes kisállat
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/kutyak" className="btn btn-info w-75">
                  Kutyáink
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/macskak" className="btn btn-info w-75">
                  Macskáink
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/kapcsolat" className="btn btn-info w-75">
              Kapcsolat
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

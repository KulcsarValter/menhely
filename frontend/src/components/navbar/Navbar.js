import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Rólunk</a>
              </li>

              
              <li className="nav-item">
                <a className="nav-link" href="/orokbefogadott">Örögbefogadottak</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/allatok" role="button" data-bs-toggle="dropdown">Kisállataink</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/allatok">Összes kisállat</a></li>
                  <li><a className="dropdown-item" href="/kutyak">Kutyáink</a></li>
                  <li><a className="dropdown-item" href="/macskak">Macskáink</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/tamogatas" role="button" data-bs-toggle="dropdown">Segítenél?</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/onkentes">Legyál önkéntes</a></li>
                  <li><a className="dropdown-item" href="/ideiglenesBefogado">Ideiglenes befogadás</a></li>
                  <li><a className="dropdown-item" href="/tamogatas">Támogatás</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/kapcsolat">Kapcsolat</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/elerhetoseg">Elérhetőségünk</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/admin">Bejelentkezés</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;

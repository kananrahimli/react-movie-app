import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
function navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark d-flex align-items-center justify-content-between px-md-4 px-3">
     
        <a className="navbar-brand" href="#">
        MyFilms
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="basicExampleNav">
          <ul className="navbar-nav ml-auto  d-flex align-items-lg-center">
            <li className="nav-item active">
            <Link to="/">Home</Link>
            </li>
            <li className="nav-item mx-lg-5 my-lg-0 my-3">
              
              <Link to="/movies">Movies</Link>
              
            </li>
            <li className="nav-item">
              
              <Link to="/tv-shows"> Tv Shows</Link>
              
            </li>
            
          </ul>
        </div>
      </nav>
    
  );
}

export default navigation;

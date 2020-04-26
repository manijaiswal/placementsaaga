import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../styles/navBar.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    };
  }

  render() {
    return (
      <nav className="navbar">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-0.84,125.81 C193.85,204.77 214.16,32.06 501.97,95.22 L500.00,0.00 L0.00,0.00 Z" />
          <defs>
            <linearGradient id="navBarGrad">
              <stop offset="5%" stop-color="#2a5697" />
              <stop offset="95" stop-color="#4a78c3" />
            </linearGradient>
          </defs>
        </svg>
        <a className="navbar-brand" href="#">
          <img src="/img/logo.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => this.setState({ collapse: !this.state.collapse })}
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse${this.state.collapse ? "" : " tog"}`}
          id="navbarSupportedContent"
        >
          <ul className="nav-menu list-unstyled d-flex flex-md-row flex-sm-column flex-end">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">
                Radar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/word-cloud">
                Word Cloud
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}


export default NavBar;
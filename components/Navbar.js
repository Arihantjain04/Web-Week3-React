import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="container-fluid">
          {/* <a className="navbar-brand" style={{color: 'white', fontWeight: '800', fontSize: '150%', fontStyle: 'italic'}} href="#">TODO</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white", fontWeight: "800" }}
                >
                  LOGIN
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  style={{ color: "white", fontWeight: "800" }}
                >
                  REGISTER
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-light" type="submit">
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

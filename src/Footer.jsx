import React from 'react';

export default function Footer() {
  return (

    <footer className="bg-primary text-center text-lg-start text-white">
      {/* Grid container */}
      <div className="container p-4">
        {/* Grid row */}
        <div className="row my-4">
          {/* Grid column - Logo */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div
              className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
              style={{ width: 150, height: 150 }}
            >
              <img
                src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png"
                height="70"
                alt=""
                loading="lazy"
              />
            </div>
            <p className="text-center">
              Homless animal shelter The budgetary unit of the Capital City of
              Warsaw
            </p>
            <ul className="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <a className="text-white px-2" href="#!">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a className="text-white px-2" href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="text-white ps-2" href="#!">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* Grid column - Animals */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Animals</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#!" className="text-white">
                  <i className="fas fa-paw pe-3"></i>When your pet is missing
                </a>
              </li>
              {/* ... Add more animal links here ... */}
            </ul>
          </div>
          {/* Grid column - Animals */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Animals</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#!" className="text-white">
                  <i className="fas fa-paw pe-3"></i>General information
                </a>
              </li>
              {/* ... Add more animal links here ... */}
            </ul>
          </div>
          {/* Grid column - Contact */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <p>
                  <i className="fas fa-map-marker-alt pe-2"></i>Warsaw, 57
                  Street, Poland
                </p>
              </li>
              {/* ... Add more contact information here ... */}
            </ul>
          </div>
        </div>
        {/* Grid row */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>

  );
}

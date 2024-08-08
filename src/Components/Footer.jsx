import React from "react";

function Footer() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <img
          style={{
            height: "442px",
            width: "100%",
          }}
          src="https://res.cloudinary.com/dhjdvfk3t/image/upload/v1723015091/footer_world_yj8hcr.png"
          alt=""
        />
        <div
          style={{
            display: "flex",
            fontFamily: "Poppins, sans-serif",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600",
            color: "white",
            fontSize: "30px",
            position: "absolute",
            zIndex: "10",
            top: "80px",
          }}
        >
          <h2>Subscribe to get special channel</h2>
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Poppins, sans-serif",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600",
            color: "white",
            fontSize: "30px",
            position: "absolute",
            zIndex: "10",
            top: "130px",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <p>
            Don't wanna miss something? Subscribe right now and get special
            promotion and monthly newsletter.
          </p>
        </div>
      </div>
      <footer className="row row-cols-5 py-3 my-3 border-top">
        <div className="col">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <img
            style={{ width: "150px", height: "100px", marginLeft: "40px" }}
            src="https://res.cloudinary.com/dhjdvfk3t/image/upload/v1723015079/rr_logo_pyzhxn.png"
            alt=""
          />
        </div>

        <div className="col"></div>

        <div className="col">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div
        style={{
          display: "flex",
          backgroundColor: "black",
          width: "100%",
          height: "60px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ color: "white" }}>
          Copyright © All rights reserved (Website Developed & Managed by
          creativechroma)
        </span>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/company/cdacindia/"
            role="button"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://x.com/cdacindia"
            role="button"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://cdac.in/index.aspx?id=MB"
            role="button"
          >
            <i className="fa fa-google"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/CDACINDIA"
            role="button"
          >
            <i className="fa fa-facebook"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/Amit0370/SkillSphere"
            role="button"
          >
            <i className="fa fa-github"></i>
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; Copyright 2025 CDAC. All Rights Reserved.
        {/* <a className="text-white" href="#">
          e-learning.com
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
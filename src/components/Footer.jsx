import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/product" className="text-white">Products</a></li>
              <li><a href="/create-product" className="text-white">Create Products</a></li>


            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <p>Email: support@example.com</p>
            <p>Phone: +91 9373651034</p>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://facebook.com" className="text-white mr-3"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com" className="text-white mr-3"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="text-white mr-3"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" className="text-white"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Subscribe to Our Newsletter</h5>
            <form>
              <input type="email" placeholder="Your email address" className="form-control mb-2" />
              <button type="submit" className="btn btn-light btn-block">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="text-center pt-4">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

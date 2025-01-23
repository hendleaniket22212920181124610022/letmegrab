import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  <style>
    {`
            /* Make the card circular */
.card {
  border-radius: 50% !important;
  padding: 20px;
  max-width: 250px; /* Adjust the max-width to fit your design */
}

/* Optional: Add a little arrow effect to mimic a dialog-like appearance */
.card .arrow {
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent black transparent; 
}

/* Additional customization for the card's text */
.card-text {
  font-size: 14px;
  text-align: center;
}

.font-weight-bold {
  font-size: 16px;
  text-align: center;
}

.text-muted {
  font-size: 12px;
  text-align: center;
}

            `}
  </style>;
  return (
    <div className="bg-light min-vh-100">
      <section id="shop" className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="display-4 font-weight-bold mb-8">
            Our Popular Products
          </h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxjb9jZaHJHSYWocOYu96O916wCRJ-AKGMQ&s"
                  alt="Premium Coffee Beans"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Premium Coffee Beans</h5>
                  <p className="card-text">
                    Freshly roasted beans from the best farms around the world.
                  </p>
                  <span className="h4 text-warning">$19.99</span>
                  <a href="#shop" className="btn btn-link text-warning mt-4">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEPpoecdgVkeleZIynZfFyf55WA0NT24q8Q&s"
                  alt="Espresso Blend"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Espresso Blend</h5>
                  <p className="card-text">
                    A rich and intense blend for your perfect espresso shot.
                  </p>
                  <span className="h4 text-warning">$14.99</span>
                  <a href="#shop" className="btn btn-link text-warning mt-4">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyS_26ecEBiFAQFY03NhqeSC5xvzCIVFlJg&s"
                  alt="French Press"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">French Press</h5>
                  <p className="card-text">
                    Brew your favorite coffee with our durable French Press.
                  </p>
                  <span className="h4 text-warning">$24.99</span>
                  <a href="#shop" className="btn btn-link text-warning mt-4">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="display-4 font-weight-bold mb-8">About Us</h2>
          <p className="lead text-dark mb-6">
            At Coffee Bliss, we are passionate about bringing you the finest
            coffee from around the world. From single-origin beans to expertly
            crafted blends, we source only the highest-quality products to
            ensure a perfect brew every time. Whether you’re a coffee
            connoisseur or a casual drinker, we have something for every taste.
          </p>
          <div className="row justify-content-center gap-5">
            <div className="col-md-5">
              <h3 className="h4 font-weight-bold mb-4">Our Mission</h3>
              <p>
                We aim to provide high-quality, ethically sourced coffee that
                brings people together and enriches their daily rituals.
              </p>
            </div>
            <div className="col-md-5">
              <h3 className="h4 font-weight-bold mb-4">Sustainability</h3>
              <p>
                We are committed to sustainable practices, supporting fair
                trade, and reducing our environmental impact through
                eco-friendly packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-5 bg-white">
  <div className="container text-center">
    <h2 className="display-4 font-weight-bold mb-8">Customer Reviews</h2>
    <div className="d-flex justify-content-center gap-4">
      <div className="card p-4 shadow-sm w-25 rounded-circle position-relative border border-dark">
        <p className="card-text">
          "The Premium Coffee Beans are amazing."
        </p>
        <p className="font-weight-bold text-warning">John D.</p>
        <span className="text-muted">Verified Buyer</span>
        <div className="arrow"></div>
      </div>

      <div className="card p-4 shadow-sm w-25 rounded-circle position-relative border border-dark">
        <p className="card-text">
          "I love the Espresso Blend."
        </p>
        <p className="font-weight-bold text-warning">Sarah W.</p>
        <span className="text-muted">Verified Buyer</span>
        <div className="arrow"></div>
      </div>

      <div className="card p-4 shadow-sm w-25 rounded-circle position-relative border border-dark">
        <p className="card-text">
          "The French Press is game changer."
        </p>
        <p className="font-weight-bold text-warning">Emily L.</p>
        <span className="text-muted">Verified Buyer</span>
        <div className="arrow"></div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default LandingPage;

import "../styles/contactus.css";

const ContactUsC = () => {
  return (
    <>
      <section className="section-contact">
        <div className="container">
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center">
            If you have any questions or would like to get more information,
            please feel free to get in touch with us.
          </p>
          <div className="row">
            <div className="col-md-6">
              <h3>Contact Info</h3>
              <p>Address: 123 Main Street, Cityville</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@deliciousbites.com</p>
            </div>
            <div className="col-md-6">
              <h3>Send us a message</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    placeholder="Your message"
                    rows={5}
                  ></textarea>
                </div>
                <button className="btn btn-primary">Send</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Location</h3>
              <div className="map">
                <img
                  src="./src/assets/map.jpg"
                  alt="Location"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsC;

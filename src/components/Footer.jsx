import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <p className="text-center text-md-start">
                  ©2023 Delicious Bites. All rights reserved.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <ul className="list-inline text-center text-md-end">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/elephantinstituteCol/"
                      target="_blank"
                    >
                      <i className="bi bi-facebook" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;

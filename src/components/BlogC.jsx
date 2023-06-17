import "../styles/blog.css";

const BlogC = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title text-center">Latest Blog Posts</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card blog-card">
            <img src="./src\assets\freshtomatobruschetta.jpg" className="card-img-top" alt="Blog Post 1" />
            <div className="card-body">
              <h5 className="card-title">Favorite One</h5>
              <p className="card-text">
                My favorite restaurant in Paris, Delicious Bites produces
                thrilling cuisine in pursuit of pleasure rather than
                perfectionism.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card blog-card">
            <img src="./src\assets\filetmignon.jpg" className="card-img-top" alt="Blog Post 2" />
            <div className="card-body">
              <h5 className="card-title">Understated</h5>
              <p className="card-text">
                Delicious Bites understated amazing food aims to stun with
                simplicity in a setting that rivals the three star cooking.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card blog-card">
            <img src="./src\assets\lobsterbisque.jpg" className="card-img-top" alt="Blog Post 3" />
            <div className="card-body">
              <h5 className="card-title">Bill issues</h5>
              <p className="card-text">
                A meal where the food was ok but service and issues with the
                bill made sure it would be memorable in all of the wrong ways.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card blog-card">
            <img src="./src\assets\quinoa.jpg" className="card-img-top" alt="Blog Post 4" />
            <div className="card-body">
              <h5 className="card-title">Best in the area</h5>
              <p className="card-text">
                A unique blend of Multicultural cooking, Delicious Bites third
                star was well earned. One of the best restaurants in the area.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogC;

import "../styles/blog.css";

const BlogC = () => {
  return (
    <div className="container">
      <h2 className="blog-title text-center">Latest Blog Posts</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card blog-card">
            <img src="image1.jpg" className="card-img-top" alt="Blog Post 1" />
            <div className="card-body">
              <h5 className="card-title">Post Title 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquet, ligula in feugiat feugiat, odio sapien fringilla
                sapien, ac sagittis tellus turpis eu elit.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card blog-card">
            <img src="image2.jpg" className="card-img-top" alt="Blog Post 2" />
            <div className="card-body">
              <h5 className="card-title">Post Title 2</h5>
              <p className="card-text">
                Sed pretium erat in lorem consectetur, vitae gravida lectus
                ultrices. Nulla efficitur mi risus, ac vulputate risus lacinia
                nec. Quisque molestie, felis sit amet maximus bibendum, urna dui
                cursus lorem, nec venenatis ex metus ac sapien.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card blog-card">
            <img src="image3.jpg" className="card-img-top" alt="Blog Post 3" />
            <div className="card-body">
              <h5 className="card-title">Post Title 3</h5>
              <p className="card-text">
                Maecenas ut semper turpis. Suspendisse commodo libero elit, et
                posuere ex congue sed. Nunc maximus neque vel velit vulputate
                aliquet. In suscipit tortor eget elementum consectetur.
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

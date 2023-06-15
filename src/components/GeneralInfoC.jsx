import "../styles/generalinfo.css";

const GeneralInfo = () => {
  return (
    <>
      <section className="banner">
        <article>
          <div className="banner-image">
            <img src="./src/assets/deliciousbites.webp" alt="Banner Image" />
          </div>
        </article>
      </section>

      <div id="infoCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h1>Welcome to Delicious Bites</h1>
            <p className="lead">
              Where taste meets perfection. We are dedicated to providing you
              with an exceptional dining experience.
            </p>
          </div>
          <div className="carousel-item">
            <h1>Indulge in Culinary Delights</h1>
            <p>
              Carefully crafted by our talented chefs using the finest
              ingredients.
            </p>
          </div>
          <div className="carousel-item">
            <h1>Exquisite Culinary Delights</h1>
            <p>
              From mouthwatering appetizers to delectable main courses and
              irresistible desserts, we have something to satisfy every palate.
            </p>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#infoCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#infoCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default GeneralInfo;

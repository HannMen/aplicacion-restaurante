import "../styles/menu.css";

const Menu = () => {
  return (
    <>
      <section className="menu-section">
        <div className="container">
          <h2>Our Menu</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="./src\assets\freshtomatobruschetta.jpg"
                  className="card-img-top"
                  alt="Appetizer"
                />
                <div className="card-body">
                  <h3 className="card-title">Appetizers</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Bruschetta with Fresh Tomato and Basil
                    </li>
                    <li className="list-group-item">Crispy Fried Calamari</li>
                    <li className="list-group-item">Caprese Salad</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="./src\assets\filetmignon.jpg"
                  className="card-img-top"
                  alt="Main Course"
                />
                <div className="card-body">
                  <h3 className="card-title">Main Courses</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Grilled Salmon with Lemon Butter Sauce
                    </li>
                    <li className="list-group-item">
                      Filet Mignon with Red Wine Reduction
                    </li>
                    <li className="list-group-item">
                      Homemade Ravioli with Mushroom
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="./src\assets\lobsterbisque.jpg"
                  className="card-img-top"
                  alt="Savor the Sea"
                />
                <div className="card-body">
                  <h3 className="card-title">Savor the Sea</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Grilled Garlic Shrimp Skewers
                    </li>
                    <li className="list-group-item">Pan-Seared Scallops</li>
                    <li className="list-group-item">Lobster Bisque</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="./src\assets\quinoa.jpg"
                  className="card-img-top"
                  alt="Vegetarian Bliss"
                />
                <div className="card-body">
                  <h3 className="card-title">Vegetarian Bliss</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Mushroom Risotto</li>
                    <li className="list-group-item">Eggplant Parmesan</li>
                    <li className="list-group-item">
                      Quinoa Stuffed Bell Peppers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="./src\assets\moltenlava.jpg"
                  className="card-img-top"
                  alt="Dessert"
                />
                <div className="card-body">
                  <h3 className="card-title">Desserts</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Tiramisu</li>
                    <li className="list-group-item">Crème Brûlée</li>
                    <li className="list-group-item">
                      Molten Chocolate Lava Cake
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="./src\assets\mojitomadness.jpg"
                  className="card-img-top"
                  alt="Crafted Cocktails"
                />
                <div className="card-body">
                  <h3 className="card-title">Crafted Cocktails</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Classic Martini</li>
                    <li className="list-group-item">Mojito Madness</li>
                    <li className="list-group-item">Cosmopolitan Crush</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

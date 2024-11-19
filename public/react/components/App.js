import React, { useEffect, useState } from "react";
import { fetchItems } from "../api/items"; // Import the fetchItems function

// Prepend the API URL to any fetch calls.
import apiURL from "../api";

function App() {
  const [items, setItems] = useState([]);

  // Fetch items when the component is mounted
  useEffect(() => {
    // Fetch the items
    const getItems = async () => {
      const data = await fetchItems(); //Get the items from the API
      setItems(data); // Update the state with the fetched items
    };

    getItems();
  }, []); // Empty dependency array makes sure this only runs once on mount

  return (
    <>
      <div class="websitebanner">
        <h1>Marketplace</h1>
        <div className="buttons">
          <button>Mens</button>
          <button>electronics</button>
        </div>
      </div>
      <div className="item">
        <div className="window-header">
          <h2>Mens Casual Slim Fit</h2>
          <div className="X-button"> _x_</div>
        </div>
        <div className="description_and_image">
          <img
            src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
            alt="mens clothing"
          ></img>
          <p>
            The color could be slightly different between on the screen and in
            practice. / Please note that body builds vary by person, therefore,
            detailed size information should be reviewed below on the product
            description.
          </p>
          <ul>
            {items.map((item) => {
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Category: {item.category}</p>
                <img src={item.image} alt={item.name} />
              </li>;
            })}
          </ul>
        </div>
        <div className="bottom-row">
          <button className="buy-button">Buy Now</button>
          <div className="pricetag">Price: $15.99</div>
        </div>
      </div>
      <div className="bottom-of-site">
        <button>Add page</button>
        <button>Remove page</button>
        <button>edit</button>
      </div>
    </>
  );
}
export default App;

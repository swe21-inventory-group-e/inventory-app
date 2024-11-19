import React, { useEffect, useState } from "react";
import Layout from "../components/layout"; // Import the Layout component
import AddPage from "../components/AddPage.js"; // Import the AddPage component
import { fetchItems } from "../api/items"; // Import the fetchItems function
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);

  // Fetch items when the component is mounted
  useEffect(() => {
    // Fetch the items
    const getItems = async () => {
      const data = await fetchItems(); // Get the items from the API
      setItems(data); // Update the state with the fetched items
    };

    getItems();
  }, []); // Empty dependency array makes sure this only runs once on mount

  return (
    <Layout>
      {/* <div className="websitebanner">
        <h1>Marketplace</h1>
        <div className="buttons">
          <button>Mens</button>
          <button>Electronics</button>
        </div>
      </div> */}
      <div className="item">
        <div className="window-header">
          <h2>Mens Casual Slim Fit</h2>
          <div className="X-button"> _x_</div>
        </div>
        <div className="description_and_image">
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Category: {item.category}</p>
                <img src={item.image} alt={item.name} />
                <button className="buy-button">Buy Now</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default App;

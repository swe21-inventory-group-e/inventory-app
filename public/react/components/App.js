import React, { useEffect, useState } from "react";
import Layout from "../components/layout"; // Import the Layout component
import { fetchItems } from "../api/items"; // Import the fetchItems function

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
    <Layout setItems={setItems} items={items}>
      <div className="items-container">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <div className="window-header">
              <h2>{item.name}</h2>
            </div>
            <div className="description_and_image">
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Category: {item.category}</p>
                <button className="buy-button">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default App;

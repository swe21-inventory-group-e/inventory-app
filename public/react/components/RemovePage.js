import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { fetchItems, deleteItem } from "../api/items";
import apiURL from "../api";

function RemovePage({ goback, setItems }) {
  const [items, setLocalItems] = useState([]);

  // Fetch items when the page loads
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setLocalItems(data);
    };
    fetchData();
  }, []);

  // Handle item removal
  const handleRemove = async (itemId) => {
    try {
      const response = await fetch(`${apiURL}/items/${itemId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // On successful deletion, update the state to remove the item
        setLocalItems(items.filter((item) => item.id !== itemId)); // Remove item from state
        setItems(items.filter((item) => item.id !== itemId)); // Update parent component's state as well (if needed)
        alert("Item removed successfully!");
      } else {
        alert("Failed to remove item");
      }
    } catch (err) {
      alert("Error occurred while removing item");
      console.error(err);
    }
  };
  return (
    <Layout>
      <div className="remove-page">
        <button onClick={goback}>Go back</button>
        <h2>Remove Items</h2>
        <div className="items-list">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button
                className="remove-button"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default RemovePage;

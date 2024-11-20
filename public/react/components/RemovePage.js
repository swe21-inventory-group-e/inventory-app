import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { fetchItems, deleteItem } from "../api/items";

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
  async function handleRemove(itemId) {
    try {
      const response = await deleteItem(itemId);
      console.log("Response from deleteItem:", response); // Log the response

      if (response.error) {
        alert(response.error); // Display the error message if any
      } else {
        alert("Item removed!");
        const updatedItems = await fetchItems(); // Re-fetch the items
        setItems(updatedItems); // Update the global state
        setLocalItems(updatedItems); // Update the local state
      }
    } catch (err) {
      console.error("Error in handleRemove:", err); // Log unexpected errors
      alert("Failed to remove item. Please try again.");
    }
  }

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

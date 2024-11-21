import React, { useEffect, useState } from "react";
import Layout from "../components/layout"; // Import the Layout component
import { fetchItems, fetchItemById } from "../api/items"; // Import the fetchItems function
import EditPage from "./EditPage";

function App() {
  const [items, setItems] = useState([]);
  const [editor, setEditor] = useState(false);

  // Fetch the items
  const getItems = async () => {
    const data = await fetchItems(); // Get the items from the API
    setItems(data); // Update the state with the fetched items
  };
  // Fetch items when the component is mounted
  useEffect(() => {
    getItems();
  }, []); // Empty dependency array makes sure this only runs once on mount


  const handleClick = async (id) => {
    try {
      const response = await fetchItemById(id); // is the error due to the 'map()'???
      if(response.error) {
        throw new Error("Not successful");
      }
      // console.log(items)
      setItems(response);
      // alert("Fetched successfully"); // Using 'alert(msg)' indicates if code behaving as expected
    } catch (error) {
      console.error("Error fetching item", error);
      // alert("Failed to fetch item");
    }
   };

  if (!Array.isArray(items)) {
    if (editor) {
      return (<EditPage page={items}  goback={() => setEditor(false)} setItems={setItems}/>)
    }
    else {
      return (<Layout>
        <p onClick={getItems}>Go back</p>
        {items.name}
        {/* Can you make this page nice? Cheers! - Azz */}
        <div key={items.id} className="item-card" onClick={() => handleClick(items.id)}>
              <div className="window-header">
                <h2>{items.name}</h2>
              </div>
              <div className="description_and_image">
                <img src={items.image} alt={items.name} />
                <div className="item-info">
                  <p>{items.description}</p>
                  <p>Price: ${items.price}</p>
                  <p>Category: {items.category}</p>
                  <button className="buy-button">Buy Now</button>
                  <button className="edit-button" onClick={() => setEditor(true)}>Edit</button>
                </div>
              </div>
            </div>
      </Layout>)
      }
  }
  
  return (
    <Layout setItems={setItems} items={items}>
      <div className="items-container">
        {items.map((item) => (
          <div key={item.id} className="item-card" onClick={() => handleClick(item.id)}>
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

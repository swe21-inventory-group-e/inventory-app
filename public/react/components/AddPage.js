import React, { useState } from "react";
import Layout from "../components/layout"; // Import the Layout component
import apiURL from "../api";

function AddPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  async function createpage(e, pageData) {
    e.preventDefault();
    const response = await fetch(apiURL + '/items', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          pageData // our data TO CREATE here
        )
    });
    if (response.status == 201) {
        alert("Item created!");
    } else {
        alert("Error, please try again!")
    }
  }
  return (
    <Layout>
      <div className="add-page">
        <h2>Add New Item</h2>
        <form onSubmit={(e) => createpage(e, {name, description, price, category, image})}>
          <label for="title">Title</label>
          <input id="title" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
          <label for="description">Description</label>
          <input id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
          <label for="price">Price</label>
          <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input>
          <label for="category">Category</label>
          <input id="category" type="text" value={category} onChange={(e) => setCategory(e.target.value)}></input>
          <label for="image">Image URL</label>
          <input id="image" type="text" value={image} onChange={(e) => setImage(e.target.value)}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </Layout>
  );
}

export default AddPage;

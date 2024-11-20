import React from "react";
import Layout from "../components/layout";
import { createItem, fetchItems } from "../api/items.js";
import Form from "./Form.js";

function AddPage({ goback, setItems }) {
  async function createpage(e, pageData) {
    e.preventDefault();
    const response = await createItem(pageData);
    if (response.error == undefined) {
        alert("Item created!");
        const newItems = await fetchItems();
        setItems(newItems);
        goback();
    } else {
        alert("Error, please try again!")
    }
  }
  return (
    <Layout>
      <div className="add-page">
        <button onClick={goback}>Go back</button>
        <h2>Add New Item</h2>
        <Form submit={createpage} />
      </div>
    </Layout>
  );
}

export default AddPage;

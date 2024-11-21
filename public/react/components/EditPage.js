import React from "react";
import Layout from "../components/layout";
import { updateItem, fetchItems } from "../api/items.js";
import Form from "./Form.js";

function EditPage({ page, goback, setItems }) {
  async function editpage(e, pageData) {
    e.preventDefault();
    const item = Object.assign({id: page.id}, pageData)
    const response = await updateItem(pageData);
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
        <Form submit={editpage} />
      </div>
    </Layout>
  );
}

export default EditPage;

import React from "react";
import Layout from "../components/layout";
import { updateItem, fetchItems } from "../api/items.js";
import Form from "./Form.js";

function EditPage({ page, goback, setItems }) {
  async function editpage(e, pageData) {
    e.preventDefault();
    Object.assign(pageData, {id: page.id})
    const response = await updateItem(pageData);
    if (response.error == undefined) {
        alert("Item updated!");
        const newItems = await fetchItems();
        setItems(newItems);
        goback();
    } else {
        alert("Error, please try again!")
    }
  }
  return (
    <Layout>
      <div className="edit-page">
        <button onClick={goback}>Go back</button>
        <h2>Edit Item</h2>
        <Form submit={editpage} page={page} />
      </div>
    </Layout>
  );
}

export default EditPage;

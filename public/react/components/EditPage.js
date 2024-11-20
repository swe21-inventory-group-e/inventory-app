import React from "react";
import Layout from "../components/layout";
import { createItem, fetchItems } from "../api/items.js";
import Form from "./Form.js";

function EditPage({ goback, setItems }) {
  async function editpage(e, pageData) {
    e.preventDefault();
    // PUT data
  }
  return (
    <Layout>
      <div className="add-page">
        <button onClick={goback}>Go back</button>
        <h2>Edit Item</h2>
        <Form submit={editpage} />
      </div>
    </Layout>
  );
}

export default EditPage;

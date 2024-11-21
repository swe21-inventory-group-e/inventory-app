import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [description, setDescription] = useState(props.description || "");
  const [price, setPrice] = useState(props.price || 0);
  const [category, setCategory] = useState(props.category || "");
  const [image, setImage] = useState(props.image || "");

  return (
    <form
      onSubmit={(e) =>
        props.submit(e, { name, description, price, category, image })
      }
    >
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="price">Price</label>
      <input
        id="price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor="category">Category</label>
      <input
        id="category"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;

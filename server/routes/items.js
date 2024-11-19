const express = require("express"); // Importing express framework
const Item = require("../models/Item.js"); // Import the Item model from /models/Item.js
const router = express.Router(); // Create a router instance for defining routes

router.use(express.json()); // Middleware to parse incoming jsoon requests

// CREATE - Add a new item
router.post("/items", async (req, res) => {
  const { name, description, price, category, image } = req.body; // Destructure fields from the request body
  try {
    const newItem = await Item.create({
      // Create a new item in the database using the data recieved
      name, // Assign name from the request body
      description, // Assign description to request body
      price, // Assign price to request body
      category, // Assign category to request body
      image, // Assign image(URL or path) to request body
    });
    res.status(201).json(newItem); // Respond with a created item and a 201 status code(success)
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ error: "Failed to create item" }); // Server side error
  }
});

// READ - Get all items
router.get("/items", async (req, res) => {
  try {
    const items = await Item.findAll(); // Retrieve all items from the database
    res.status(200).json(items); // Respond with the list of items and a 200 status code
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "Failed to retrieve items" }); // response with an error message and a 500 status code
  }
});

// READ - Get a single item by ID
router.get("/items/:id", async (req, res) => {
  const { id } = req.params; // Extract the ID from the route parameters
  try {
    const item = await Item.findByPk(id); // Find an item by its primary key (ID)
    if (!item) {
      return res.status(404).json({ error: "Item not found" }); // respond with a 404 error
    }
    res.status(200).json(item); // Respond with the retrieved item and a 200 status code
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "Failed to retrieve item" }); // Respond with an error message and 500 status code
  }
});

// UPDATE - Update an item by ID
router.put("/items/:id", async (req, res) => {
  const { id } = req.params; // Extract the ID from the route parameters
  const { name, description, price, category, image } = req.body; // Destructure updated fields from the request body
  try {
    const item = await Item.findByPk(id); // Find the item by its primary key (ID)
    if (!item) {
      return res.status(404).json({ error: "Item not found" }); // Respond with a 404 err
    }
    // Update the item with new values or keep the old ones if not provided
    item.name = name || item.name;
    item.description = description || item.description;
    item.price = price || item.price;
    item.category = category || item.category;
    item.image = image || item.image;

    await item.save(); // Save the updated item to the database
    res.status(200).json(item); // Respond with the updated item and a 200 status code
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "Failed to update item" }); // Respond with an error message
  }
});

// DELETE - delete an item by ID
router.delete("/items/:id", async (req, res) => {
  const { id } = req.params; // Extract the item by its primary key (ID)
  try {
    const item = await Item.findByPk(id); // Find the item by its primary key(ID)
    if (!item) {
      return res.status(404).json({ error: "Item not found" }); // Respond with a 404 error message
    }
    await item.destroy(); // Delete the item from the database
    res.status(200).json({ message: "Item deleted successfully" }); // Respond with a success message
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "Failed to delete item" }); // Respond with a 500 error message
  }
});

module.exports = router;

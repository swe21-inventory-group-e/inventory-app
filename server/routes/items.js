const express = require("express"); // Using express
const { Item } = require("../models/Item.js"); // Import the Item model from /models/Item.js
const e = require("express");
const router = express.Router();

router.use(express.json());

// Define your routes here

// CREATE - Add a new item
router.post("/items", async (req, res) => {
  const { name, description, price, category, image } = req.body;
  try {
    const newItem = await Item.create({
      name,
      description,
      price,
      category,
      image,
    });
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create item" });
  }
});

// READ - Get all items
router.get("/items", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve items" });
  }
});

// READ - Get a single item by ID
router.get("/items/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve item" });
  }
});

// UPDATE - Update an item by ID
router.put("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, image } = req.body;
  try {
    const item = await Item.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    // Update the item with new values
    item.name = name || item.name;
    item.description = description || item.description;
    item.price = price || item.price;
    item.category = category || item.category;
    item.image = image || item.image;

    await item.save();
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update item" });
  }
});

module.exports = router;

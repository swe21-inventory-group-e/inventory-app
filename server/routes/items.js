const express = require("express"); // Using express
const { Item } = require("../models/Item.js"); // Import the Item model from /models/Item.js
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

module.exports = router;

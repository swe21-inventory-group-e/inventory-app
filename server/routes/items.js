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
// GET a single item by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Ideally, fetch item by ID from the database
    res.status(200).json({
      message: `Fetched item with ID ${id}`,
      item: {}, // Empty for now, will be replaced with DB data
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch item", message: error.message });
  }
});

// CREATE a new item
router.post("/", async (req, res) => {
  const { name, description, price, quantity } = req.body;
  try {
    // Ideally, insert a new item into the database
    res.status(201).json({
      message: "New item created",
      item: {
        name,
        description,
        price,
        quantity,
        id: 1, // This would be the ID returned by the DB
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create item", message: error.message });
  }
});

// Update an existing item
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity } = req.body;
  try {
    // Ideally, update item in the database
    res.status(200).json({
      message: `Updated item with ID ${id}`,
      updatedItem: {
        id,
        name,
        description,
        price,
        quantity,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update item", message: error.message });
  }
});

// Delete an item by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Ideally, delete item from the database
    res.status(200).json({
      message: `Deleted item with id ${id}`,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete item", message: error.message });
  }
});
module.exports = router;

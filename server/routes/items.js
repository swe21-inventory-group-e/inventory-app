const express = require("express");
const { Item } = require("../models");

const router = express.Router();
router.use(express.json());

// Define your routes here

// Get all items in inventory
router.get("/", async (req, res) => {
  try {
    // Ideally, fetch all items from the database
    res.status(200).json({
      message: "Fetched all items",
      items: [], // Empty for now, will be replaced with DB data
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch items", message: error.message });
  }
});

module.exports = router;

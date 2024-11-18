const express = require("express");
const router = express.Router();
const itemsRouter = require("./items");

// different model routers
router.use("/items", require("./items"));
router.use("/items", itemsRouter);

// Test route to ensure the API is working
router.get("/test", (req, res) => {
  res.status(200).json({ message: "API is working!" });
});

module.exports = router;

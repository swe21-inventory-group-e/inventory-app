const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Item extends Model {}

Item.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    //category: // TODO: Sort through table
    category: DataTypes.STRING,
    image: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: "Item", // Specifying model name just for clarity
  }
);

module.exports = Item;

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Item extends Model {}

Item.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: DataTypes.TEXT,
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    category: DataTypes.TEXT 
    image: DataTypes.TEXT
  },
  {
    sequelize,
  }
);

module.exports = Item;

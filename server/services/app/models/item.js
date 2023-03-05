"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Item.belongsTo(models.User, { foreignKey: "authorId" });
      Item.belongsTo(models.Category, { foreignKey: "categoryId" });
      Item.hasMany(models.Ingredient, {
        foreignKey: "itemId",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Item.init(
    {
      name: {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
          notNull : "Item Name is required",
          notEmpty : "Item Name is required"
        }
      },
      description: {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
          notNull : "Description is required",
          notEmpty : "Description is required"
        }
      },
      price: {
        type : DataTypes.INTEGER,
        allowNull : false,
        validate : {
          notNull : "Price is required",
          notEmpty : "Price is required",
          min : 1000
        }
      },
      imgUrl: {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
          notNull : "Image URL is required",
          notEmpty : "Image URL is required"
        }
      },
      authorId: {
        type : DataTypes.INTEGER,
        // allowNull : false
      },
      categoryId: {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      UserMongoId: {
        type : DataTypes.STRING,
        allowNull : false
      },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};

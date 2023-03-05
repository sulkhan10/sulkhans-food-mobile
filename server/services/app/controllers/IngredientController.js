const { Item, User,Ingredient, Category } = require("../models");
const { Sequelize } = require("sequelize");
class IngredientController {
  static async allIngredients(req, res, next) {
    try {
      let ingredients = await Ingredient.findAll({
        order: [["id", "ASC"]],
        include : Item
      });
      res.status(200).json(ingredients);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = IngredientController;

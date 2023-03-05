const { Item, User, Category } = require("../models");
class CategoryController {
  static async allCategories(req, res, next) {
    try {
      let categories = await Category.findAll({
        order: [["id", "ASC"]],
      });
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }
  static async getCategoryById(req, res, next) {
    try {
      let { categoryId } = req.params;
      console.log(categoryId);
      let category = await Category.findByPk(categoryId);
      if (!category) {
        throw { name: "NotFound" };
      }
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }
  static async deleteCategory(req, res, next) {
    try {
      let { categoryId } = req.params;
      let category = await Category.findByPk(categoryId);
      if (!category) {
        throw { name: "NotFound" };
      }
      category.destroy();
      res.status(200).json({
        message: `Category ${category.name} (id ${category.id}) is successfully deleted`,
      });
    } catch (error) {
      next(error);
    }
  }
  static async createCategory(req, res, next) {
    try {
      console.log(req.body);
      let { name } = req.body;
      let data = await Category.create({ name });
      res.status(201).json({
        message: `Category ${data.name} (id ${data.id}) is successfully created`,
      });
    } catch (error) {
      next(error);
    }
  }
  static async updateCategory(req, res, next) {
    try {
      let { categoryId } = req.params;
      let { name } = req.body;
      let category = await Category.findByPk(categoryId);
      if (!category) {
        throw { name: "NotFound" };
      }
      category.update({ name });
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CategoryController;

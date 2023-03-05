const { Item, User, Category, Ingredient } = require("../models");
const { sequelize } = require("../models/");
const { Op } = require("sequelize");

class ItemController {
  static async allItems(req, res, next) {
    let { search } = req.query;
    console.log(req.query);
    let keyword = "%" + search + "%";
    try {
      let option = {
        order: [["id", "ASC"]],
        include: [
          {
            model: Category,
          },
          {
            model: Ingredient,
          },
        ],
      };
      if (search && search !== "undefined") {
        option.where = {
          name: {
            [Op.iLike]: keyword,
          },
        };
      }
      let items = await Item.findAll(option);
      // console.log(items);
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }

  static async deleteItem(req, res, next) {
    try {
      let { itemId } = req.params;
      // console.log(itemId);
      let item = await Item.findByPk(itemId);
      if (!item) {
        throw { name: "NotFound" };
      }
      console.log(item);
      item.destroy();
      res.status(200).json({
        message: `Item ${item.name} (id ${item.id}) is successfully deleted`,
      });
    } catch (error) {
      next(error);
    }
  }
  static async createItem(req, res, next) {
    const t = await sequelize.transaction();
    try {
      console.log(req.body);
      // console.log(req.user);
      // let UserMongoId
      // if (!req.user) {
      //   UserMongoId = "63f638b8a0b076c04db280dc";
      // }else {
      //   UserMongoId =   req.user.id;

      // }
      // console.log(UserMongoId);
      let { categoryId, imgUrl, price, description, name, ingredient,UserMongoId } =
        req.body;
      let data = await Item.create(
        { categoryId, imgUrl, price, description, name, UserMongoId }, //!
        // { categoryId, imgUrl, price, description, name, userMongoId: 1 }, //!
        { transaction: t }
      );
      ingredient.map((x) => {
        x.itemId = data.id;
        return x;
      });
      console.log(ingredient);
      await Ingredient.bulkCreate([...ingredient], { transaction: t });

      res.status(201).json({
        message: `Item ${data.name} (id ${data.id}) is successfully created`,
        data,
      });

      await t.commit();
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
  static async getItemById(req, res, next) {
    try {
      let { itemId } = req.params;
      let item = await Item.findByPk(itemId, {
        include: [
          {
            model: Category,
          },
          {
            model: Ingredient,
          },
        ],
      });
      if (!item) {
        throw { name: "NotFound" };
      }
      console.log(item);
      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  }

  static async editItem(req, res, next) {
    const t = await sequelize.transaction();
    try {
      let { itemId } = req.params;
      let { categoryId, imgUrl, price, description, name, ingredient ,UserMongoId} =
        req.body;
      let item = await Item.findByPk(itemId);
      if (!item) {
        throw { name: "NotFound" };
      }
     let data = await item.update(
        { categoryId, imgUrl, price, description, name ,UserMongoId},
        { transaction: t }
      );
      ingredient.map((x) => {
        x.itemId = item.id;
        return x;
      });
      await Ingredient.destroy({
        where: {
          itemId: item.id,
        },
      });
      await Ingredient.bulkCreate(
        [...ingredient],
        {
          updateOnDuplicate: ["name"],
        },
        { transaction: t }
      );
      console.log(data);
      res
      .status(200)
      .json({data,message : `Item ${item.name} (id ${item.id}) is successfully updated`});
      // .json(data);
      await t.commit();
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
}

module.exports = ItemController;

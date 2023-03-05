let axios = require("axios");
const redis = require("../config/ioredis");
let itemAPI = "http://localhost:4002/items/";
let userAPI = "http://localhost:4001/users/";

class ItemController {
  static async findAllItem(req, res) {
    try {
      let itemCache = await redis.get("app:items");
      if (itemCache) {
        let data = JSON.parse(itemCache);
        res.status(200).json(data);
      } else {
        let { data } = await axios({
          method: "get",
          url: itemAPI,
        });
        await redis.set("app:items", JSON.stringify(data));
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
      console.log(error);
    }
  }
  static async findItemById(req, res) {
    let { id } = req.params;
    try {
      let { data : item } = await axios({
        method: "get",
        url: itemAPI + id,
      });
      // console.log(item);
      let { data : user } = await axios({
        method: "get",
        url: userAPI + item.UserMongoId,
      });
      item.User = user
      res.status(200).json(item);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
      console.log(error.response);
    }
  }
  static async deleteItemById(req, res) {
    let { id } = req.params;
    try {
      let { data } = await axios({
        method: "delete",
        url: itemAPI + id,
      });
      await redis.del("app:items")
      res.status(200).json(data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
      console.log(error);
    }
  }
  static async createItem(req, res) {
    // console.log(req.user);
    try {
      let { data } = await axios({
        method: "post",
        url: itemAPI,
        data: req.body,
      });
      await redis.del("app:items")
      res.status(200).json(data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
      console.log(error);
    }
  }
  static async updateItem(req, res) {
    let { id } = req.params;

    try {
      let { data } = await axios({
        method: "put",
        url: itemAPI + id,
        data: req.body,
      });
      await redis.del("app:items")
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }
}

module.exports = ItemController;

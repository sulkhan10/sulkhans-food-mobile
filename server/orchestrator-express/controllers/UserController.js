let axios = require("axios");
const redis = require("../config/ioredis");
let userAPI = "http://localhost:4001/users/";
class UserController {
  static async findAllUser(req, res) {
    try {
      let userCache = await redis.get("users:users");
      if (userCache) {
        let data = JSON.parse(userCache);
        res.status(200).json(data);
      } else {
        let { data } = await axios({
          method: "get",
          url: userAPI,
        });
        await redis.set("users:users", JSON.stringify(data));
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }
  static async findUserById(req, res) {
    let { id } = req.params;
    // console.log(id);
    try {
      let { data } = await axios({
        method: "get",
        url: userAPI + id,
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
      // res.status(500).json({message : ''});

    }
    
  }
  static async deleteUserById(req, res) {
    let { id } = req.params;
    try {
      let { data } = await axios({
        method: "delete",
        url: userAPI + id,
      });
      await redis.del("users:users");
      res.status(200).json(data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);

      // res.status(500).json(error);
      console.log(error);
    }
  }
  static async createUser(req, res) {
    // let { username, email, role, password, phoneNumber, address } = req.body;
    try {
      let { data } = await axios({
        method: "post",
        url: userAPI ,
        data : req.body
      });
      await redis.del("users:users");
      res.status(200).json(data);
    } catch (error) {
      // res.status(500).json(error);
      res.status(error.response.status).json(error.response.data);

      console.log(error);
    }
  }
}

module.exports = UserController;

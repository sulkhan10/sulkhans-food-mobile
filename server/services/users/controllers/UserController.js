let { hashPassword } = require("../helpers/bcrypt");
const User = require("../models/user");
class UserController {
  static async findAll(req, res) {
    return res.json(await User.findAll());
  }
  static async findById(req, res) {
    let { id } = req.params;
    return res.json(await User.findById(id));
  }
  static async deleteById(req, res) {
    let { id } = req.params;
    return res.json(await User.deleteById(id));
  }
  static async createUser(req, res) {
    let { username, email, role, password, phoneNumber, address } = req.body;
    try {
      if (!username || !email || !password) {
        res.status(400).json({
          message: "data is username, email, password required",
        });
      } else {
        password = hashPassword(password);
        res.status(200).json(
          await User.createUser({
            username,
            email,
            role,
            password,
            phoneNumber,
            address,
          })
        );
      }
    } catch (error) { res.status(500).json({
      message: "Internal Server Error",
    });}
  }
}

module.exports = UserController;

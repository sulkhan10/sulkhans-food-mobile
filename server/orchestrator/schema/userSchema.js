let axios = require("axios");
const redis = require("../config/ioredis");
// let userAPI = "http://localhost:4001/users/";
let userAPI = process.env.USER_API

const typeDefs = `#graphql

  type User {
    _id: String
    id: ID
    username: String
    email: String
    phoneNumber: String
    role: String
    address: String
  }
  type SuccessCreateUser {
    acknowledged: Boolean
    insertedId: String

  }
  type SuccessDeleteUser {

    message: String

  }
  input inputUser {
    # id: ID
    username: String
    password: String
    email: String
    phoneNumber: String
    role: String
    address: String
  }


  type Query {
    findAllUser: [User],
    findUserById(_id:String): User,
    deleteUserById(_id:String): SuccessDeleteUser,
  }
  type Mutation {
    createUser(newUser:inputUser): SuccessCreateUser
  }
`;

const resolvers = {
  Query: {
    findAllUser: async() => {
      try {
        let userCache = await redis.get("users:users");
        if (userCache) {
          let data = JSON.parse(userCache);
          return data
        } else {
          let { data } = await axios({
            method: "get",
            url: userAPI,
          });
          await redis.set("users:users", JSON.stringify(data));
          return data
        }
      } catch (error) {
        throw error
      }
    },
    deleteUserById: async (parent, args) => {
      let { _id } = args;
      console.log(_id);
      try {
        let { data } = await axios({
          method: "delete",
          url: userAPI + _id,
        });
        console.log(data);
        await redis.del("users:users")
        return data
      } catch (error) {
        // res.status(error.response.status).json(error.response.data);
        console.log(error);
        throw error
      }
    },
    findUserById: async (parent, args) => {
      let { _id } = args;
      console.log(_id);
      try {
        let { data } = await axios({
          method: "get",
          url: userAPI + _id,
        });
        console.log(data);
        return data
      } catch (error) {
        
        // res.status(error.response.status).json(error.response.data);
        console.log(error);
        throw error
      }
    },
  },
  Mutation: {
    createUser:async(parent, args) => {
      // console.log(args);
      try {
        let { data } = await axios({
          method: "post",
          url: userAPI ,
          data : args.newUser
        });
        await redis.del("users:users");
        // res.status(200).json(data);
        console.log(data);
        return data
      } catch (error) {
        
        // res.status(500).json(error);
        // res.status(error.response.status).json(error.response.data);
        console.log(error);
        throw error
      }
    },
  },
};

module.exports = {typeDefs,resolvers};

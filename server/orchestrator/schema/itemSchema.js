let axios = require("axios");
const redis = require("../config/ioredis");
// let itemAPI = "http://localhost:4002/items/";
let itemAPI = process.env.ITEM_API;
// let userAPI = "http://localhost:4001/users/";
let userAPI = process.env.USER_API

const typeDefs = `#graphql

  type Item {
    id: ID,
    name: String,
    description: String,
    price: Int,
    imgUrl: String,
    authorId: Int,
    categoryId: Int,
    UserMongoId: String,
    Category: Category,
    Ingredients: [Ingredient]
    User:UserResult
  }
  type UserResult {
    _id: String
    id: ID
    username: String
    email: String
    phoneNumber: String
    role: String
    address: String
  }
  type Ingredient {
    id: ID,
    name: String,
    itemId: Int,
  }
  type SuccessCreateItem {
    message: String
    data:Item
  }
  type SuccessDeleteItem {
    message: String
  }
  type SuccessUpdateItem {
    data:Item
    message: String
  }
  
  type Category {
    id: ID,
    name: String,
  }
  input ingredientInput {
    name: String,
  }
 
  input inputItem {
    id: ID,
    name: String,
    description: String,
    price: Int,
    imgUrl: String,
    authorId: Int,
    categoryId: Int,
    UserMongoId: String,
    ingredient: [ingredientInput]
  }


  type Query {
    findAllItem: [Item],
    findItemById(id:ID): Item,
    deleteItemById(id:ID): SuccessDeleteItem,
  }
  type Mutation {
    createItem(newItem:inputItem): SuccessCreateItem,
    updateItem(id:ID,newItem:inputItem): SuccessUpdateItem,
  }
`;

const resolvers = {
  Query: {
    findAllItem: async () => {
      try {
        let itemCache = await redis.get("app:items");
        if (itemCache) {
          let data = JSON.parse(itemCache);
          return data;
        } else {
          let { data } = await axios({
            method: "get",
            url: itemAPI,
          });
          await redis.set("app:items", JSON.stringify(data));
          return data;
        }
      } catch (error) {
        res.status(error.response.status).json(error.response.data);
        console.log(error);
        throw error.response.data;
      }
    },
    findItemById: async (parent, args) => {
      let { id } = args;
      try {
        let { data: item } = await axios({
          method: "get",
          url: itemAPI + id,
        });
        if (item.UserMongoId!==null) {
          let { data: user } = await axios({
            method: "get",
            url: userAPI + item.UserMongoId,
          });
          item.User = user;
        }     
        return item;
      } catch (error) {
        throw error.response;
      }
    },
    deleteItemById: async (parent, args) => {
      let { id } = args;
      try {
        let { data } = await axios.delete(itemAPI + id);
        await redis.del("app:items");
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createItem: async (parent, args) => {
      try {
        let { data } = await axios({
          method: "post",
          url: itemAPI,
          data: args.newItem,
        });
        console.log(data);
        await redis.del("app:items");

        return data;
      } catch (error) {
        // console.log(error);
        throw error;
      }
    },
    updateItem: async (parent, args) => {
      try {
        let { data } = await axios({
          method: "put",
          url: itemAPI + args.id,
          data: args.newItem,
        });
        console.log(data);
        await redis.del("app:items");

        return data;
      } catch (error) {
        // console.log(error);
        throw error;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };

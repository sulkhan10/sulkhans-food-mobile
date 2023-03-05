const {MongoClient,ObjectId} = require('mongodb')
const {getDB}= require('../config/db')


class User {
static collection(){
  return getDB().collection('users')
}
static async findAll(){
  let users = await this.collection().find().project({password:0}).toArray() 
  return users
}
static async findById(id){
  let userById = await this.collection().findOne({_id: new ObjectId(id)})
  if (userById) {
    let {_id,username,email,role,phoneNumber,address} = userById
    return {_id,username,email,role,phoneNumber,address}
  } else {
    return {message : "No documents matched the query"}
  }
}
static async deleteById(id){
  let result = await this.collection().deleteOne({_id: new ObjectId(id)})
  if (result.deletedCount === 1) {
    return {message : "Successfully deleted one document."}
  } else {
    return {message : "No documents matched the query. Deleted 0 documents."}
  } 
}
static async createUser(dataInput){
  let newUser = await this.collection().insertOne(dataInput)
  return newUser
}
}

module.exports=User
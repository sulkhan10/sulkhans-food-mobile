const {MongoClient,ObjectId} = require('mongodb')
// let url = 'mongodb://127.0.0.1:27017'
let url = 'mongodb+srv://sulkhangalangsakti:CJRzh1N42zNids6K@sulkhan.s0nqkag.mongodb.net/?retryWrites=true&w=majority'
let dbName = 'sulkhans'
let dataUser = require('./user.json')

const client = new MongoClient(url);
let seedUser = async() => {
try {
  await client.connect()
 let userDB = client.db(dbName);
let users = userDB.collection('users')
let result = await users.insertMany(dataUser)
return result
} catch (error) {
  await client.close(); 
  throw error
}finally{
    await client.close(); 

}
}



seedUser()
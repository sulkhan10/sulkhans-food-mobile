const {MongoClient,ObjectId} = require('mongodb')
// let url = 'mongodb://127.0.0.1:27017'
// let url = 'mongodb+srv://sulkhangalangsakti:CJRzh1N42zNids6K@sulkhan.s0nqkag.mongodb.net/test'
let url = 'mongodb+srv://sulkhangalangsakti:CJRzh1N42zNids6K@sulkhan.s0nqkag.mongodb.net/?retryWrites=true&w=majority'
let dbName = 'sulkhans'

const client = new MongoClient(url);
let db
let connectDB = async() => {
try {
  await client.connect()
 db = client.db(dbName);

} catch (error) {
  await client.close();
  throw error
}
}
let getDB = () => {
return db
}

module.exports={connectDB,getDB}

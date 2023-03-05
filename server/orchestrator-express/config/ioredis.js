require('dotenv').config()
const Redis = require("ioredis");
const redis = new Redis({
    port: 10388, // Redis port
    host: "redis-10388.c299.asia-northeast1-1.gce.cloud.redislabs.com", // Redis host
    // username: "default", // needs Redis >= 6
    password: process.env.REDIS_PASSWORD ,
    // db: 0, // Defaults to 0
  });
// console.log(process.env.REDIS_PASSWORD);
  module.exports=redis
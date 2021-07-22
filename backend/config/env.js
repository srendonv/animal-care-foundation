let path = require('path');
require('dotenv').config( { path: path.resolve(__dirname, '../.env')});
let env = process.env.APP_ENV;

if(env === "development"){

  require('dotenv').config( { path: path.resolve(__dirname, '../.env.development')});

  module.exports = {     
    appEnvironment: process.env.APP_ENV,
    mongoDb: process.env.MONGO_DB,
    mongoHost: process.env.MONGO_HOST   
    
 }; } else if(env === "production") {

  require('dotenv').config( { path: path.resolve(__dirname, '../.env.production')});

  module.exports = {     
    appEnvironment: process.env.APP_ENV,
    mongoUser: process.env.MONGO_USER,
    mongoPwd: process.env.MONGO_PWD,
    mongoDb: process.env.MONGO_DB,
    mongoHost: process.env.MONGO_HOST};  }
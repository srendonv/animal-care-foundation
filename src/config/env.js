let path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
let api_env = process.env.REACT_APP_API_ENV;
console.log("api_env: " + api_env);

if (api_env === "development") {
  console.log("ingreso a api_dev");

  require("dotenv").config({
    path: path.resolve(__dirname, "../../.env.development"),
  });

  module.exports = {
    appEnvironment: process.env.API_ENV,
    mongoDb: process.env.MONGO_DB,
    mongoHost: process.env.MONGO_HOST,  
    backHost: process.env.REACT_APP_API_DEV_HOST,
    mailUser: process.env.REACT_APP_MAIL_USER,
    mailPass: process.env.REACT_APP_MAIL_PASS
      
 };
 console.log("backHost: " + process.env.REACT_APP_API_DEV_HOST)

} else 

if(api_env === "production") {

  console.log("ingreso a api_prod");

  require("dotenv").config({
    path: path.resolve(__dirname, "../../.env.production"),
  });

  module.exports = {
    appEnvironment: process.env.API_ENV,
    mongoUser: process.env.MONGO_USER,
    mongoPwd: process.env.MONGO_PWD,
    mongoDb: process.env.MONGO_DB,
    mongoHost: process.env.MONGO_HOST,
    backHost: process.env.REACT_APP_API_PROD_HOST,
    mailUser: process.env.REACT_APP_MAIL_USER,
    mailPass: process.env.REACT_APP_MAIL_PASS
  };  

  console.log("backHost: " + process.env.REACT_APP_API_PROD_HOST)

  console.log("backHost: " + process.env.REACT_APP_API_PROD_HOST);
}

//Modify APP_ENV to production or development in backend/.env
let api = require('../config/env')
let env = api.appEnvironment;

if(env === "development"){
  module.exports = { db: `mongodb://${api.mongoHost}/${api.mongoDb}`}; }  

else if(env === "production"){

  module.exports = {
    db: `mongodb+srv://${api.mongoUser}:${api.mongoPwd}@${api.mongoHost}/${api.mongoDb}?retryWrites=true&w=majority`    
  };
}
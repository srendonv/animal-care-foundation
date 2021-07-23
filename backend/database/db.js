//Modify REACT_APP_API_ENV to production or development in ./.env
let api = require('../../src/config/env')
let env = api.appEnvironment;

if(env === "development"){
  module.exports = { db: `mongodb://${api.mongoHost}/${api.mongoDb}`}; }  

else if(env === "production"){

  module.exports = {
    db: `mongodb+srv://${api.mongoUser}:${api.mongoPwd}@${api.mongoHost}/${api.mongoDb}?retryWrites=true&w=majority`    
  };
}
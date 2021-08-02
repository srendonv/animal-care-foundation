const db = require("../database/db").db;

module.exports = {
  mongoURI: db,
  secretOrKey: "secret",
};

// pulls the information from the .env file for process to use
require("dotenv").config();

// require the sequelize package
const Sequelize = require("sequelize");

// creates a new instance of sequelize
const sequelize = process.env.JAWSDB_URL
    ? // this process is for deployment to heroku
      new Sequelize(process.env.JAWSDB_URL)
    : // this process runs if not deploying to heroku
      // this is the standard sequilize server instance
      new Sequelize(
          process.env.DB_NAME,
          process.env.DB_USER,
          process.env.DB_PASSWORD,
          {
              host: "localhost",
              dialect: "mysql",
              dialectOptions: {
                  decimalNumbers: true,
              },
          }
      );

module.exports = sequelize;

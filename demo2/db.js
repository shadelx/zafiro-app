const { Sequelize } = require('sequelize');

//Importing modules
const Business = require('./models/Business');
const Pet = require('./models/Pet');
const Record = require('./models/Record');
const Report = require('./models/Report');
const User = require('./models/User');

// Database connection
const sequelize = new Sequelize('zafirodb', 'root', 'xarlj264', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
  });

  // Getting models
const models = [
    Business,
    Pet,
    Record,
    Report,
    User
  ];

// Registering models into Sequelize
for (let model of models) {
    model(sequelize);
  }
// Configuring relations

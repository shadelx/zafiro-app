const { Sequelize } = require('sequelize');

//Importing modules
const Vet = require('./models/Vet');
const Pet = require('./models/Pet');
const Record = require('./models/Record');
const Report = require('./models/Report');
const User = require('./models/User');

// Database connection
const sequelize = new Sequelize('zafirodb', 'root', 'ipodxenon', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
  });

  // Getting models
const models = [
    Vet,
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
const { vets, pets, records, reports, users } = sequelize.models;
pets.belongsTo(users); //relation: many to one
reports.belongsTo(pets); //relation: reports for each dog
reports.belongsTo(vets);// reports: many to one
records.belongsTo(pets); //relation: one to one

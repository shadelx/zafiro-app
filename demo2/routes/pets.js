const express = require('express');
const router = express.Router();
const sequelize = require('../db');

const permission = require('../middlewares/permission');

// Get all pets
router.get('/', permission('admin'), async (req, res) => {
    const pets = await sequelize.models.pets.findAndCountAll();
    return res.status(200).json({ data: pets });
  });

  // Creating a new pet
router.post('/', permission('admin', 'client'), async (req, res) => {
    const { body } = req;
    const pet = await sequelize.models.pets.create({
      name:body.name,
      breed:body.breed,
      size:body.size,
      weight:body.weight
    }); 
    await pet.save();
    return res.status(201).json({ data: pet });
  });

  // Update a pet by id
router.put('/:id', permission('admin'), async (req, res) => {
    const { body, params: { id } } = req;
    const pet = await sequelize.models.pets.findByPk(id);
    if (!pet) {
      return res.status(404).json({ code: 404, message: 'Pet not found' });
    }
    const updatedPet = await pet.update({
      name:body.name,
      breed:body.breed,
      size:body.size,
      weight:body.weight
    });
    return res.json({ data: updatedPet });
  });

  // Delete a pet by id
router.delete('/:id', permission('admin'), async (req, res) => {
    const { params: { id } } = req;
    const pet = await sequelize.models.pets.findByPk(id);
    if (!pet) {
      return res.status(404).json({ code: 404, message: 'Pet not found' });
    }
    await pet.destroy();
    return res.json();
  });
  
  module.exports = router;
const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

// Get all vets
router.get('/', permission('admin', 'client'), async (req, res) => {
  const vets = await sequelize.models.vets.findAndCountAll();
  return res.status(200).json({ data: vets });
});

// Create a new vet
router.post('/', permission('admin'), async (req, res) => {
  const { body } = req;
  const vet = await sequelize.models.vets.create({
    name: body.name,
    description: body.description,
  });
  await vet.save();
  return res.status(201).json({ data: vet })
});

// Update a vet by id
router.put('/:id', permission('admin'), async (req, res) => {
  const { body, params: { id } } = req;
  const vet = await sequelize.models.vets.findByPk(id);
  if (!vet) {
    return res.status(404).json({ code: 404, message: 'Vets not found' });
  }
  const updatedProduct = await vet.update({
    name: body.name,
    description: body.description,
  });
  return res.json({ data: updatedProduct });
});

// Delete a vet by id
router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const vet = await sequelize.models.vets.findByPk(id);
  if (!vet) {
    return res.status(404).json({ code: 404, message: 'Vets not found' });
  }
  await vet.destroy();
  return res.json();
});

module.exports = router;
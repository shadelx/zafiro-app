const express = require('express');
const router = express.Router();
const sequelize = require('../db');

const permission = require('../middlewares/permission');
// Get all records
router.get('/', permission('admin'), async (req, res) => {
  const records = await sequelize.models.records.findAndCountAll();
  return res.status(200).json({ data: records });
});

// Creating a new record
router.post('/', permission('admin', 'client'), async (req, res) => {
  const { body } = req;
  const record = await sequelize.models.records.create({
    petId: body.petId,
    content: body.content,
  });
  await record.save();
  return res.status(201).json({ data: record });
});

// Update a record by id
router.put('/:id', permission('admin'), async (req, res) => {
  const { body, params: { id } } = req;
  const record = await sequelize.models.records.findByPk(id);
  if (!record) {
    return res.status(404).json({ code: 404, message: 'record not found' });
  }
  const updatedRecord = await record.update({
    petId: body.petId,
    content: body.content,
  });
  return res.json({ data: updatedRecord });
});

// Delete a record by id
router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const record = await sequelize.models.records.findByPk(id);
  if (!record) {
    return res.status(404).json({ code: 404, message: 'record not found' });
  }
  await record.destroy();
  return res.json();
});

module.exports = router;
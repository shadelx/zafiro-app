const express = require('express');
const router = express.Router();
const sequelize = require('../db');

const permission = require('../middlewares/permission');

// Get all reports
router.get('/', permission('admin'), async (req, res) => {
  const reports = await sequelize.models.reports.findAndCountAll();
  return res.status(200).json({ data: reports });
});

// Creating a new report
router.post('/', permission('admin', 'client'), async (req, res) => {
  const { body } = req;
  const report = await sequelize.models.reports.create({
    vetId: body.vetId,
    petId: body.petId,
    content: body.content,
  });
  await report.save();
  return res.status(201).json({ data: report });
});

// Update a report by id
router.put('/:id', permission('admin'), async (req, res) => {
  const { body, params: { id } } = req;
  const report = await sequelize.models.reports.findByPk(id);
  if (!report) {
    return res.status(404).json({ code: 404, message: 'report not found' });
  }
  const updatedReport = await report.update({
    vetId: body.vetId,
    petId: body.petId,
    content: body.content,
  });
  return res.json({ data: updatedReport });
});

// Delete a report by id
router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const report = await sequelize.models.reports.findByPk(id);
  if (!report) {
    return res.status(404).json({ code: 404, message: 'report not found' });
  }
  await report.destroy();
  return res.json();
});

module.exports = router;
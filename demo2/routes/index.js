const express = require('express');
const router = express.Router();


const authenticate = require('../middlewares/authentication');

// Adding requires routes
router.use('/auth', require('./auth'));
router.use('/pets', authenticate, require('./pets'));
router.use('/records', authenticate, require('./records'));
router.use('/reports', authenticate, require('./reports'));
router.use('/users', authenticate, require('./users'));
router.use('/vets', authenticate, require('./vets'));

module.exports = router;
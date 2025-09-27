const express = require('express');
const router = express.Router();
const { getAIReport } = require('../controllers/report');

router.get('/', getAIReport);

module.exports = router;

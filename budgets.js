const express = require('express');
const router = express.Router();
const { getBudgets, addBudget, updateBudget, deleteBudget } = require('../controllers/budget');

router.get('/', getBudgets);
router.post('/', addBudget);
router.put('/:id', updateBudget);
router.delete('/:id', deleteBudget);

module.exports = router;

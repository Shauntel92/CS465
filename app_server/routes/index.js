const express = require('express');
const router = express.Router();
const ctrlTravlr = require('../controllers/travlr');

router.get('/', ctrlTravlr.travel);
router.get('/travel', ctrlTravlr.travel);

module.exports = router;

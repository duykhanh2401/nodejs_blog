const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/coures', meController.storedCoures);
router.get('/trash/coures', meController.trashCoures);

module.exports = router;

const Router = require('express');
const router = new Router();

const positionController = require('../controllers/positionController')

router.get('/', positionController.getAll) // All user get data
router.post('/create', positionController.create) // Create employee

module.exports = router;
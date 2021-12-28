const Router = require('express');
const router = new Router();

const reportController = require('../controllers/reportController')

router.get('/', reportController.getAll) // All user get data
router.post('/create', reportController.create) // Create employee

module.exports = router;
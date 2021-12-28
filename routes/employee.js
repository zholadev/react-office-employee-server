const Router = require('express');
const router = new Router();

const EmployeeController = require('../controllers/employeeController')

router.get('/', EmployeeController.getAll) // All user get data
router.post('/create', EmployeeController.create) // Create employee

module.exports = router;
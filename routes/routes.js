
const Router = require('express');
const router = new Router();

// Routes
const employee = require('./employee')
const position = require('./position')
const order = require('./order')
const report = require('./report')

router.use('/employee', employee);
router.use('/position', position);
router.use('/order', order)
router.use('/report', report)

module.exports = router;
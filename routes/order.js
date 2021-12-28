const Router = require('express');
const router = new Router();

const OrderController = require('../controllers/orderController')

router.get('/', OrderController.getAll);
router.post('/create', OrderController.create);

module.exports = router;
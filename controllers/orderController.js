const OrderModel = require('../models/order');

class OrderController {
  async create(req, res) {

    try {
      const { order, countNumber, employee } = req.body;

      const orderPlace = new OrderModel({
        order,
        employee,
        countNumber
      })

      orderPlace.save()
        .then(result => {
          res.json({
            message: 'Order created'
          })
        })
        .catch(err => {
          console.log(err)
        })

    } catch (error) {
      console.log(error)
    }
  };


  async getAll(req, res) {
    try {
      const order = await OrderModel.find()

      res.json(order)

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new OrderController();
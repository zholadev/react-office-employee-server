const PositionModel = require('../models/position');

class PositionController {
  async create(req, res) {

    try {
      const { position, salary, category, discharge, employee } = req.body;

      const positionPlace = new PositionModel({
        position,
        salary, category, discharge, employee
      })

      positionPlace.save()
        .then(result => {
          res.json({
            message: 'Position created'
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
      const position = await PositionModel.find()

      res.json(position)

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new PositionController();
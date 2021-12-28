const ReportModel = require('../models/report');

class ReportController {
  async create(req, res) {

    try {
      const { countNumber, employee, workIn, outWork, output, holiday, sick } = req.body;

      const reportPlace = new ReportModel({
        countNumber, employee, workIn, outWork, output, holiday, sick
      })

      reportPlace.save()
        .then(result => {
          res.json({
            message: 'report created'
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
      const report = await ReportModel.find()

      res.json(report)

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new ReportController();
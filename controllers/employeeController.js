const EmployeeModel = require('../models/employee');

class EmployeeController {

  async create(req, res) {
    try {
      const { name, lastName, profileImage, email, tel, birth, IIN, familyStatus, gender, workExperience, educationLevel, address } = req.body;

      const employee = new EmployeeModel({
        name, lastName, profileImage, email, tel, birth, IIN, familyStatus, gender, workExperience, educationLevel, address
      })

      employee.save()
        .then(result => {
          res.json({
            message: 'Employee created'
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
      const employee = await EmployeeModel.find()
      res.json(employee)

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new EmployeeController();
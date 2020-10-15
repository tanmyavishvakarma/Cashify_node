const db = require("../models");
const Device = db.devices;
const Op = db.Sequelize.Op;
bodyParser = require('body-parser').json();

// Create and Save a new Devices
exports.create = (req, res) => {
  // Validate request
  if (!req.body.serialno) {
  return  res.status(400).send({
      message: "Content cnnan not be empty!"
    });
  }

  // Create a Devices
  const device = {
    serialno: req.body.serialno,
    brand: req.body.brand,
    modelname: req.body.modelname 
  };

  // Save Devices in the database
  Device.create(device)
    .then(data => {
    return  res.send(data);
    })
    .catch(err => {
    return  res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Devices."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

    const serialno = req.query.serialno;
    var condition = serialno ? { serialno: { [Op.like]: `%${serialno}%` } } : null;
  
    Device.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

    const id = req.params.id;

    Device.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

  Device.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

    const id = req.params.id;

    Device.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Device.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
  
};


module.exports = app => {
    const devices = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create a new devicesial
    router.post("/", devices.create);
  
    // Retrieve all devices
    router.get("/", devices.findAll);
  
    // Retrieve all published devices

  
    // Retrieve a single deviceswith serialno
    router.get("/:serialno", devices.findOne);
  
    // Update a deviceswith serialno
    router.put("/:serialno", devices.update);
  
    // Delete a deviceswith serialno
    router.delete("/:serialno", devices.delete);
  
    // Delete all devices
    router.delete("/", devices.deleteAll);
  
    app.use('/api/devices', router);
  };
  
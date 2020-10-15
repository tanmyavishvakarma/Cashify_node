module.exports = (sequelize, Sequelize) => {
    const Device = sequelize.define("device", {
      serialno: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      brand: {
        type: Sequelize.STRING
      },
      modelname: {
        type: Sequelize.STRING
      }
    });
  
    return Device;
  };
  
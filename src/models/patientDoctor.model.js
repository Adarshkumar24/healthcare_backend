module.exports = (sequelize, DataTypes) => {
    const PatientDoctor = sequelize.define("PatientDoctor", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    });
    return PatientDoctor;
  };


module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define("Patient", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY
      },
      address: {
        type: DataTypes.STRING
      },
      medicalHistory: {
        type: DataTypes.TEXT
      }
    });
    return Patient;
  };


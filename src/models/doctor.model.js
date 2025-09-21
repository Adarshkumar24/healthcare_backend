module.exports = (sequelize, DataTypes) => {
    const Doctor = sequelize.define("Doctor", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      specialization: {
        type: DataTypes.STRING
      }
    });
    return Doctor;
  };


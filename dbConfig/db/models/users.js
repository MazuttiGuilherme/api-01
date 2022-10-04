'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Events, {
        foreignKey: "event_id"
      }); 

      Users.hasMany(models.Inscriptions, {
        foreignKey: "inscription_id"
      });
    }
  }

  Users.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Users',
    paranoid: true
  });
  return Users;
};
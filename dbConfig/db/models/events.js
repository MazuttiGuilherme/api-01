'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Events.hasMany(models.Inscriptions, {
        foreignKey:"event_id"
      });

      Events.belongsTo(models.Users, {
        foreignKey: "user_id"
      });
    }
  }
  Events.init({
    name: DataTypes.STRING,
    start_date: DataTypes.DATEONLY
  }, 
  {
    sequelize,
    modelName: 'Events',
    paranoid: true
  });
  return Events;
};
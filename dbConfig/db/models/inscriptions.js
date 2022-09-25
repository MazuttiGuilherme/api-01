'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inscriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inscriptions.belongsTo(models.Users, {
        foreignKey: "developer_id"
      });

      Inscriptions.belongsTo(models.Events, {
        targetKey: "event_id"
      });
    }
  }
  Inscriptions.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Inscriptions',
  });
  return Inscriptions;
};
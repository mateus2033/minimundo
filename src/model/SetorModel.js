'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetorModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SetorModel.init({
    id_setor: DataTypes.INTEGER,
    nome_setor:STRING,
    decricao_setor:STRING
  }, {
    sequelize,
    modelName: 'SetorModel',
  });
  return SetorModel;
};
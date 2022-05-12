'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PessoaModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PessoaModel.init({
    id_pessoa: DataTypes.INTEGER,
    name_pessoa: DataTypes.STRING,
    email_pessoa:DataTypes.STRING,
    setor:DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'PessoaModel',
  }); 
  return PessoaModel;
};
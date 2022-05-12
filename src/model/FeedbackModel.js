'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FeedBackModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FeedBackModel.init({
    id_feedback: DataTypes.INTEGER,
    titulo_feedback:STRING,
    nivel_feedback:INTEGER,
    texto_feedback:STRING,
    avaliacao_feedback:STRING,
    avaliacao:INTEGER,
  }, {
    sequelize,
    modelName: 'FeedBackModel',
  });
  return FeedBackModel;
};
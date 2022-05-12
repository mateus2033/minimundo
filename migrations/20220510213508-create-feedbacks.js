'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('feedbacks', {
      id_feedback: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
      titulo_feedback: { type: Sequelize.STRING, allowNull: false },
      nivel_feedback: { type: Sequelize.INTEGER, allowNull: false },
      texto_feedback: { type: Sequelize.STRING, allowNull: false },
      avaliacao_feedback: { type: Sequelize.STRING, allowNull: false },
      avaliacao: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'pessoas',
          },
          key: 'id_pessoa'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('feedbacks');
  }
};

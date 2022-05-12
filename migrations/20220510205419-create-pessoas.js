'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('pessoas', {

      id_pessoa: { type: Sequelize.INTEGER, allownull: false, primaryKey: true, autoIncrement: true },
      name_pessoa: { type: Sequelize.STRING, allownull: false },
      email_pessoa: { type: Sequelize.STRING, allownull: false },
      setor: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'setor',
          },
          key: 'id_setor'
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
    await queryInterface.dropTable('pessoas');
  }
};

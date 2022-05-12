'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('setor', {
      id_setor:{type: Sequelize.INTEGER, allowNull:false, primaryKey:true,autoIncrements:true},
      nome_setor:{type: Sequelize.STRING, allowNull:false},
      decricao_setor:{type: Sequelize.STRING, allowNull:false},
      
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

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('E:\Minimundo\migrations\20220510220618-create-setor.js ');
     */
     await queryInterface.dropTable('setor');
  }
};

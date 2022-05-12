'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('setor', [{
      id_setor: 1,
      nome_setor: 'RH',
      decricao_setor: 'Setor RH'
    },
    {
      id_setor: 2,
      nome_setor: 'TI',
      decricao_setor: 'Setor TI'
    },
    {
      id_setor: 3,
      nome_setor: 'Produção',
      decricao_setor: 'Setor de produção'
    },
    {
      id_setor: 4,
      nome_setor: 'Logistica',
      decricao_setor: 'Setor de logistica'
    },
    {
      id_setor: 5,
      nome_setor: 'HelpDesk',
      decricao_setor: 'Setor de hesldesk'
    },
    {
      id_setor: 6,
      nome_setor: 'Financeiro',
      decricao_setor: 'Setor de Finanças'
    },
    {
      id_setor: 7,
      nome_setor: 'Almoxarifado',
      decricao_setor: 'Setor Almoxarifado'
    },
    {
      id_setor: 8,
      nome_setor: 'Suporte',
      decricao_setor: 'Setor de Suporte'
    },
    {
      id_setor: 9,
      nome_setor: 'Gerencia',
      decricao_setor: 'Setor de Gerencia'
    },
    {
      id_setor: 10,
      nome_setor: 'Transportes',
      decricao_setor: 'Setor de transportes'
    }], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('setor', null, {});
    
  }
};

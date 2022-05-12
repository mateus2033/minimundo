'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('pessoas', [{

      id_pessoa: 1,
      name_pessoa: "Mateus",
      email_pessoa: "mateus@gmail.com",
      setor:2

    }, {

      id_pessoa: 2,
      name_pessoa: "Sarah Connor",
      email_pessoa: "Sara@gmail.com",
      setor:5

    }, {

      id_pessoa: 3,
      name_pessoa: "Claire Redfield",
      email_pessoa: "Redfield@gmail.com",
      setor:1

    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};

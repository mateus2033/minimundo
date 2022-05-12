'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('feedbacks', [{
      id_feedback: 1,
      titulo_feedback: "is simply dummy text of the printing and typesetting",
      nivel_feedback: 10,
      texto_feedback: "is simply dummy text of the printing and typesetting",
      avaliacao_feedback: 10,
      avaliacao: 1
    },{
      id_feedback: 2,
      titulo_feedback: "is simply dummy text of the printing and typesetting",
      nivel_feedback: 10,
      texto_feedback: "is simply dummy text of the printing and typesetting",
      avaliacao_feedback: 10,
      avaliacao: 1
    },{
      id_feedback: 3,
      titulo_feedback: "Contrary to popular belief, Lorem Ipsum is not simply random text",
      nivel_feedback: 9,
      texto_feedback: "Contrary to popular belief, Lorem Ipsum is not simply random text",
      avaliacao_feedback: 9,
      avaliacao: 2
    },{
      id_feedback: 4,
      titulo_feedback: "There are many variations of passages of Lorem Ipsum available",
      nivel_feedback: 8,
      texto_feedback: "There are many variations of passages of Lorem Ipsum available",
      avaliacao_feedback: 8,
      avaliacao: 2
    },{
      id_feedback: 5,
      titulo_feedback: "middle of text. All the Lorem Ipsum generators on the Intern",
      nivel_feedback: 6,
      texto_feedback: "middle of text. All the Lorem Ipsum generators on the Intern",
      avaliacao_feedback: 6,
      avaliacao: 3
    },{
      id_feedback: 6,
      titulo_feedback: "generated Lorem Ipsum is therefore always free from repetition,",
      nivel_feedback: 5,
      texto_feedback: "generated Lorem Ipsum is therefore always free from repetition,",
      avaliacao_feedback: 5,
      avaliacao: 3
    }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('feedbacks', null, {});
  }
};

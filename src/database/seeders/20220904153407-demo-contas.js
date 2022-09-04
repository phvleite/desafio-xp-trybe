'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('contas',
    [
      { 'user_id': 6, saldo: 755000, },
      { 'user_id': 5, saldo: 85000, },
      { 'user_id': 4, saldo: 7000, },
      { 'user_id': 2, saldo: 980000, },
      { 'user_id': 1, saldo: 648000, },
      { 'user_id': 3, saldo: 29000, },
    ], { });
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.bulkDelete('contas', null, {})
  }
};

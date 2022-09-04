'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('acoes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      acao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qtde: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('acoes');
  }
};

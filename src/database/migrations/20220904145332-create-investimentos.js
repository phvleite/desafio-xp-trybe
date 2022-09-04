'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('investimentos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      contId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'conta_id',
        references: {
          model: 'contas',
          key: 'id',
        }
      },
      acaoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'acao_id',
        references: {
          model: 'acoes',
          key: 'id',
        }
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
    await queryInterface.dropTable('investimentos');
  }
};

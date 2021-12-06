"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tb_episode", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cod_anime: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nm_episode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      link_episode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      duracao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tb_episode");
  },
};

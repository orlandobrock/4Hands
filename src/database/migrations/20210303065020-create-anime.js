"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tb_anime", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nm_anime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      biografia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      capa_anime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qtd_episode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: Sequelize.STRING,
      genero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tb_animes");
  },
};

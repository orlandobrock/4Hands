const { Model, DataTypes } = require("sequelize");

class Episode extends Model {
  static init(sequelize) {
    super.init(
      {
        cod_anime: DataTypes.INTEGER,
        nm_episode: DataTypes.STRING,
        link_episode: DataTypes.STRING,
        duracao: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "tb_episode",
        freezeTableName: true,
      }
    );
  }
}

module.exports = Episode;

const { Model, DataTypes } = require("sequelize");

class Anime extends Model {
  static init(sequelize) {
    super.init(
      {
        nm_anime: DataTypes.STRING,
        biografia: DataTypes.STRING,
        capa_anime: DataTypes.STRING,
        qtd_episode: DataTypes.INTEGER,
        status: DataTypes.STRING,
        genero: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "tb_anime",
        freezeTableName: true,
      }
    );
  }
}

module.exports = Anime;

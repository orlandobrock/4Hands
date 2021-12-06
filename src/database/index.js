const Sequelize = require("sequelize");

const dbConfig = require("../config/database");

const Anime = require("../models/Anime");
const Episode = require("../models/Episode");

const connection = new Sequelize(dbConfig);

Anime.init(connection);
Episode.init(connection);

module.exports = connection;

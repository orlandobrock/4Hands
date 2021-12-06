const express = require("express");
const routes = express.Router();
const animeController = require("./controllers/animeController");

routes.get("/", animeController.index);
routes.get("/anime/:anime", animeController.animebio);
routes.get("/anime/player/:anime", animeController.player);
routes.post("/cadastro", animeController.store);
routes.get("/cadastro", animeController.cadastro);
routes.get("/cadastro/anime", animeController.episode);
routes.post("/cadastro/anime", animeController.episodeStore);

module.exports = routes;

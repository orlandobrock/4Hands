const Anime = require("../models/Anime");
const Episodes = require("../models/Episode");

module.exports = {
  async index(req, res) {
    const animes = await Anime.findAll();
    return res.render("index.njk", { anime: animes });
  },

  async animebio(req, res) {
    const animes = await Anime.findByPk(req.params.anime);
    const episodes = await Episodes.findAll({
      where: {
        cod_anime: req.params.anime,
      },
    });
    return res.render("anime-info.njk", { anime: animes, episode: episodes });
  },

  async player(req, res) {
    const animes = await Anime.findByPk(req.params.anime);
    const episodes = await Episodes.findByPk(req.params.anime);
    return res.render("video.njk", { anime: animes, episode: episodes });
  },

  async cadastro(req, res) {
    return res.render("cadastro.njk");
  },

  async store(req, res) {
    const { nome, sinopse, link, status, episodios, genero } = req.body;
    const anime = await Anime.create({
      nm_anime: nome,
      biografia: sinopse,
      capa_anime: link,
      qtd_episode: episodios,
      status,
      genero,
    });
    return res.redirect("/");
  },
  async episode(req, res) {
    const animes = await Anime.findAll();
    return res.render("cadastro-episode.njk", { anime: animes });
  },
  async episodeStore(req, res) {
    const { nm_episode, duracao, cod_anime, link_episode } = req.body;
    const episode = await Episodes.create({
      cod_anime: cod_anime,
      nm_episode: nm_episode,
      link_episode: link_episode,
      duracao: duracao,
    });
    return res.redirect("/");
  },
};

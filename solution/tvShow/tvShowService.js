'use strict';
const TvShow = require('./TvShow');
const createId = require('../utils/idUtil');

class TvShowService {
  constructor() {
    this.tvShows = [
      new TvShow(createId(), 'Mr.Robot', 'Drama'),
      new TvShow(createId(), 'Black Mirror', 'Drama')
    ];
  }

  getAll() {
    return this.tvShows;
  }

  getById(id) {
    const tvShow = this.tvShows.find(tvShow => tvShow.id == id);
    return tvShow;
  }

  createTvShow(name, genre) {
    const id = createId();
    const tvShow = new TvShow(id, name, genre);
    this.tvShows.push(tvShow);
    return tvShow;
  }

  remove(id) {
    const tvShowToDelete = this.getById(id);
    this.tvShows = this.tvShows.filter(tvShow => tvShow.id !== id);
    return tvShowToDelete;
  }

  update(id, updatedTvShow) {
    this.tvShows = this.tvShows
      .map(tvShow => {
        if (tvShow.id === id) {
          return Object.assign({}, tvShow, updatedTvShow);
        }
        return tvShow;
      });
    return this.getById(id);
  }
}

module.exports = new TvShowService();

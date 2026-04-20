const gameStore = {
  games: [],

  addGame(game) {
    this.games.push(game);
  },

  getGames() {
    return this.games;
  }
};

export default gameStore;
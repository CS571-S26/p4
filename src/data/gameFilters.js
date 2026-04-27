export const filterGames = (games, filters) => {
  return games.filter((game) => {
    const nameFilter = filters.name.trim().toLowerCase();
    const playersFilter = filters.players.trim().toLowerCase();
    const timeFilter = filters.time.trim().toLowerCase();

    const matchesName = nameFilter === "" || game.name.toLowerCase().includes(nameFilter);
    const matchesPlayers = playersFilter === "" || game.num_players.toLowerCase().includes(playersFilter);
    const matchesTime = timeFilter === "" || game.playtime.toLowerCase().includes(timeFilter);

    return matchesName && matchesPlayers && matchesTime;
  });
};

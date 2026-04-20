const cardGames = [
  {
    id: 1,
    name: "President",
    img: "obama.jpg",
    num_players: "3+",
    playtime: "10-15 mins",
    difficulty: "easy",
    favorite: false,
    setup: "1. Shuffle a standard 52-card deck.\n2. Deal all cards evenly to all players (some players may have one extra card).\n",
    description: "1. The player to the left of the dealer goes first. Play proceeds clockwise.\n2. On your turn, you may play one or more cards of the same rank (e.g., one 7, two 7s, etc.).\n3. The next player must play cards of a higher rank and the same number or more cards than the previous play.\n4. If a player cannot or chooses not to play, they pass.\n5. Play continues clockwise until all players pass except the last player who played cards.\n6. The last player clears the pile and starts a new round by playing any card(s). \n 7. The first person to get rid of all of their cards becomes the 'President', the last person becomes a 'citizen'. On the next round, before game play begins the citizen gives the President their 2 highest cards, and the President gives the citizen any 2 cards of their chocie."
  },
  {
    id: 2,
    name: "War",
    img: "michelle_obama.jpg",
    num_players: "2",
    playtime: "10-20 mins",
    difficulty: "easy",
    favorite: false,
    setup: "1. Shuffle a standard 52-card deck.\n2. Deal all cards evenly between the two players face-down.\n",
    description: "1. Both players flip the top card of their deck at the same time.\n2. The player with the higher card takes both cards and places them at the bottom of their deck.\n3. If the cards are equal, a 'war' occurs.\n4. During a war, each player places three cards face-down and one card face-up.\n5. The player with the higher face-up card takes all cards.\n6. The game continues until one player has all the cards."
  },
  {
    id: 3,
    name: "Go Fish",
    img: "joe_biden.jpg",
    num_players: "2-4",
    playtime: "10-15 mins",
    difficulty: "easy",
    favorite: false,
    setup: "1. Shuffle a standard 52-card deck.\n2. Deal 7 cards to each player if 2 players, or 5 cards each if more than 2 players.\n3. Place the remaining cards face-down as a draw pile.\n",
    description: "1. Players take turns asking another player for a specific rank they already have.\n2. If the asked player has the card, they must give all cards of that rank.\n3. If not, they say 'Go Fish,' and the asking player draws a card.\n4. If the drawn card matches the request, the player goes again.\n5. When a player collects four of a kind, they place it down as a set.\n6. The game ends when all sets are collected. The player with the most sets wins."
  },
  {
    id: 4,
    name: "Crazy Eights",
    img: "hillary_clinton.jpg",
    num_players: "2-5",
    playtime: "10-20 mins",
    difficulty: "easy",
    favorite: false,
    setup: "1. Shuffle a standard 52-card deck.\n2. Deal 5 cards to each player.\n3. Place the remaining cards face-down as a draw pile and flip one card to start the discard pile.\n",
    description: "1. Players take turns matching the top card of the discard pile by rank or suit.\n2. If a player cannot play, they draw a card.\n3. Eights are wild and can be played at any time.\n4. When playing an eight, the player chooses the next suit.\n5. The first player to get rid of all their cards wins.\n6. If the draw pile runs out, reshuffle the discard pile (except the top card)."
  },
  {
    id: 7,
    name: "Speed",
    img: "obama.jpg",
    num_players: "2",
    playtime: "5-10 mins",
    difficulty: "medium",
    favorite: false,
    setup: "1. Shuffle a standard 52-card deck.\n2. Deal 20 cards to each player as their draw pile.\n3. Each player places 5 cards face-down in front of them as their hand.\n4. Place 2 cards face-down in the center, with a small stack of remaining cards next to each as draw piles.\n",
    description: "1. Both players flip the two center cards face-up at the same time.\n2. Players play cards from their hand onto either center pile as fast as possible.\n3. A card can be played if it is one rank higher or lower than the top card of a center pile (e.g., 5 on 4 or 6).\n4. Players draw from their draw pile to keep 5 cards in their hand whenever possible.\n5. There are no turns; players play simultaneously and as quickly as they can.\n6. If neither player can make a move, each flips a new card onto the center piles.\n7. The first player to get rid of all their cards wins."
  }
];

export default cardGames;
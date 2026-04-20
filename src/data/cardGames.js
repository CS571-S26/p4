const cardGames = [
  {
    id: 1,
    name: "President",
    img: "ace_spades.jpg",
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
    img: "ace_spades.jpg",
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
    img: "ace_spades.jpg",
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
    img: "ace_spades.jpg",
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
    img: "ace_spades.jpg",
    num_players: "2",
    playtime: "5-10 mins",
    difficulty: "medium",
    favorite: false,
    setup: "1. Shuffle a standard 52-card deck.\n2. Deal 20 cards to each player as their draw pile.\n3. Each player places 5 cards face-down in front of them as their hand.\n4. Place 2 cards face-down in the center, with a small stack of remaining cards next to each as draw piles.\n",
    description: "1. Both players flip the two center cards face-up at the same time.\n2. Players play cards from their hand onto either center pile as fast as possible.\n3. A card can be played if it is one rank higher or lower than the top card of a center pile (e.g., 5 on 4 or 6).\n4. Players draw from their draw pile to keep 5 cards in their hand whenever possible.\n5. There are no turns; players play simultaneously and as quickly as they can.\n6. If neither player can make a move, each flips a new card onto the center piles.\n7. The first player to get rid of all their cards wins."
  },
  {
    id: 8,
    name: "Euchre",
    img: "ace_spades.jpg",
    num_players: "4",
    playtime: "20-30 mins",
    difficulty: "medium",
    favorite: false,
    setup: "1. Use a standard 52-card deck but remove all cards 2 through 8 (only 9, 10, J, Q, K, A are used).\n2. Shuffle the 24-card deck.\n3. Deal 5 cards to each player, in sets (e.g., 2-3-2 or 3-2-3).\n4. Place the remaining 4 cards face-down as the 'kitty,' flipping the top card face-up to start the trump suit selection.\n",
    description: "1. Players decide the trump suit starting with the player left of the dealer, who can 'order it up' or pass.\n2. If all players pass, a second round allows players to choose a different trump suit.\n3. The player who chooses trump becomes the 'maker' and plays with their partner.\n4. Players take turns playing one card each, following suit if possible.\n5. The highest card of the lead suit wins the trick, unless a trump card is played (trump beats all other suits).\n6. The team that wins the most tricks (out of 5) scores points.\n7. First team to reach 10 points wins the game."
  },
  {
    id: 9,
    name: "Old Maid",
    img: "ace_spades.jpg",
    num_players: "2+",
    playtime: "10-15 mins",
    difficulty: "easy",
    favorite: false,
    setup: "1. Remove one queen from a standard 52-card deck (creating the 'Old Maid').\n2. Shuffle the remaining cards.\n3. Deal all cards evenly to players.\n",
    description: "1. Players remove any pairs from their hand and place them face-up.\n2. The first player draws a card from the player to their left.\n3. If the drawn card creates a pair, it is discarded.\n4. Play continues clockwise, with players drawing and discarding pairs.\n5. The game ends when all pairs are made.\n6. The player left holding the unpaired card (Old Maid) loses."
  },
  {
    id: 10,
    name: "Gin Rummy",
    img: "ace_spades.jpg",
    num_players: "2",
    playtime: "20-30 mins",
    difficulty: "medium",
    favorite: false,
    setup: "1. Shuffle a standard 52-card deck.\n2. Deal 10 cards to each player.\n3. Place the remaining cards face-down as a draw pile, and flip one card to start the discard pile.\n",
    description: "1. On each turn, a player draws from either the draw pile or discard pile.\n2. The player then discards one card.\n3. The goal is to form sets (three or four of a kind) or runs (three or more consecutive cards of the same suit).\n4. A player may 'knock' if their unmatched cards total 10 points or less.\n5. The opponent reveals their hand and may reduce unmatched cards if possible.\n6. The player with the lower deadwood (unmatched cards) scores the round."
  },
  {
    id: 11,
    name: "Cribbage",
    img: "ace_spades.jpg",
    num_players: "2-4",
    playtime: "20-40 mins",
    difficulty: "medium",
    favorite: false,
    setup: "1. Use a standard 52-card deck.\n2. Each player is dealt 6 cards (or 5 in 3+ player games).\n3. Each player discards 2 cards into a shared 'crib' for the dealer.\n4. One card is flipped from the deck to start the play (starter card).\n",
    description: "1. Players take turns playing cards, keeping a running total that cannot exceed 31.\n2. Points are scored for combinations like pairs, runs, and totals of 15.\n3. After play, players score their hands plus the starter card.\n4. The dealer also scores the crib hand.\n5. Points are tracked on a cribbage board.\n6. First player to reach 121 points wins."
  },
  {
    id: 12,
    name: "Bullshit (Cheat)",
    img: "ace_spades.jpg",
    num_players: "3+",
    playtime: "10-20 mins",
    difficulty: "easy",
    favorite: false,
    setup: "1. Shuffle a standard 52-card deck.\n2. Deal all cards evenly to players.\n",
    description: "1. Players take turns placing cards face-down in the center, declaring their rank in order (e.g., 'two 5s').\n2. Players may lie about what they are playing.\n3. Any player can call 'Bullshit!' if they think someone is lying.\n4. The played cards are revealed if challenged.\n5. If the player lied, they pick up the pile; if they were truthful, the challenger picks it up.\n6. The goal is to get rid of all your cards first."
  },
  {
    id: 13,
    name: "Call Break",
    img: "ace_spades.jpg",
    num_players: "4",
    playtime: "20-30 mins",
    difficulty: "medium",
    favorite: false,
    setup: "1. Use a standard 52-card deck.\n2. Deal all 13 cards to each of the 4 players.\n3. Spades are always the trump suit.\n",
    description: "1. Each player declares how many tricks they expect to win (their 'call').\n2. Players take turns playing one card per trick.\n3. Players must follow suit if possible; otherwise they may play a trump (spade).\n4. The highest card of the lead suit wins unless a trump card is played.\n5. Players try to meet their declared number of tricks.\n6. After all 13 tricks, scores are calculated based on successful calls."
  }
];

export default cardGames;
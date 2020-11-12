import { getNewDeck, getCards } from './api.js';
import { printCards } from './dom.js';
const player1 = 'player1';
const player2 = 'player2';

// call to get a new shuffled deck
let deckPromise = getNewDeck();

deckPromise.then(async (deck) => {
  let data1 = await getCards(deck.deck_id, 2);
  let data2 = await getCards(deck.deck_id, 2);
  printCards(data1.cards, player1);
  printCards(data2.cards, player2);
});

async function hitMe(playerId) {
  let deck = await deckPromise;
  let data = await getCards(deck.deck_id, 1);
  printCards(data.cards, playerId);
}

window.hitMe = hitMe;
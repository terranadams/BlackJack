const player1 = 'player1';
const player2 = 'player2';

// call to get a new shuffled deck
let deckPromise = fetch(
  'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
).then((response) => response.json());

function getCards(deckId, cardCount) { // This function gets a random card from the selected deck (deck_id)
  return fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardCount}`
  ).then((response) => response.json()); // This converts the api string into an object
}
// We get the specific deck_id from deckPromise, and the getCards function adds the specific deck_id to it's own fetch url using parameters when the function gets called. It's brilliant
deckPromise.then((deck) => { // "deck.deck_id" selects the single deck being used and draws two cards from it, deck reps the data in deckPromise to select the deck's id.
  getCards(deck.deck_id, 2).then(data => printCards(data.cards, player1)); // I assume "data" also reps the data coming from deckPromise, ask the teacher if it's necessary for different argument names for different functions
  getCards(deck.deck_id, 2).then(data => printCards(data.cards, player2)); // deck_id is a key with a value within "deck" which reps the data in deckPromise
});

function printCards(cards, playerId) { // "cards" will represent the data in the getCard fetch url when it's called
  cards.forEach((card) => { // check with teacher that the different representer names still represent the same data, but we use different names for the different functions being used
    let cardHtml = `
              <div>
                  <img src="${card.image}">
              </div>
          `;
    document.getElementById(`${playerId}-cards`).innerHTML += cardHtml;
  });
}

function hitMe(playerId) {
  deckPromise.then((deck) => {
    getCards(deck.deck_id, 1).then((data) => { // This grabs another card from "deck_id" and THEN (using a different representer) prints the card with printCard()
      printCards(data.cards, playerId);
    });
  });
}
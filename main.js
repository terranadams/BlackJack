const player1 = 'player1';
const player2 = 'player2';

// call to get a new shuffled deck
let deckPromise = fetch(
  'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
).then((response) => response.json());

async function getCards(deckId, cardCount) { // This function gets a random card from the selected deck (deck_id)
  let response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardCount}`
  );
  return response.json();
}
// We get the specific deck_id from deckPromise, and the getCards function adds the specific deck_id to it's own fetch url using parameters when the function gets called. It's brilliant
deckPromise.then(async (deck) => { // deck.deck_id selects the single deck being used and draws two cards from it, deck reps the data in deckPromise to select the deck's id
  let data1 = await getCards(deck.deck_id, 2);
  let data2 = await getCards(deck.deck_id, 2);
  printCards(data.cards, player1)); 
  printCards(data.cards, player2));
;

function printCards(cards, playerId) {
  cards.forEach((card) => { // cards represents the data that gets passed from the getCards function when "then" is used after it
    let cardHtml = `
              <div>
                  <img src="${card.image}">
              </div>
          `;
    document.getElementById(`${playerId}-cards`).innerHTML += cardHtml;
  });
}

async function hitMe(playerId) {
  let deck = await deckPromise
  let data = await getCards(deck.deck_id, 1);
  printCards(data.cards, playerId);
}

// function hitMe(playerId) {
//   deckPromise.then((deck) => {
//     getCards(deck.deck_id, 1).then((data) => { // This grabs another card from deck_id and THEN (using a different representer) prints the card with printCard()
//       printCards(data.cards, playerId);
//     });
//   });
// }
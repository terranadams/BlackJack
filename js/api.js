export async function getNewDeck() {
    const response = await fetch(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    );
    return await response.json();
  }
  
  export async function getCards(deckId, cardCount) {
    let response = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardCount}`
    );
    return response.json();
  }
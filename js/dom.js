export function printCards(cards, playerId) {
    cards.forEach((card) => {
      let cardHtml = `
                  <div>
                      <img src="${card.image}">
                  </div>
              `;
      document.getElementById(`${playerId}-cards`).innerHTML += cardHtml;
    });
  }
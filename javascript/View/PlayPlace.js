import Card from "./Card.js";

export default class PlayPlace {
  #parent;
  #winner;
  #list;

  constructor(parent, list) {
    this.#parent = parent;
    this.#list = list;
    this.#winner = $(".winning");
    this.CardPrinter();
  }

  setWinner(msg) {
    this.#winner.append(`
            <p>${msg}</p>
            `);
  }

  CardPrinter() {
    // console.log(this.#list);
    this.#list.forEach((element, index) => {
      new Card(element, this.#parent, index);
    });
  }
}

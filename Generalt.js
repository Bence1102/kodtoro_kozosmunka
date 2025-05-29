import { generaltLista } from "./listak.js";

export default class General {
  #generaltLista = [];
  #szElem;
  constructor(generaltLista) {
    // Inicializálás
    this.#generaltLista = generaltLista;
    this.#szElem = document.querySelector(".general"); 
    this.megjelenit(); 
  }

  megjelenit() {
    
  }
}

export default class Generalt {
  #generaltLista = [];
  #szElem;
  constructor(generaltLista) {
    this.#generaltLista = generaltLista;
    this.#szElem = document.querySelector(".generalt .jateksor .sor")
  }
  megjelenit() {
    let html = `
             <div class="generalt">
              <div class="Elem"  style="background-color: ${this.generaltLista[0]}"></div>
              <div class="Elem" style="background-color: ${this.generaltLista[1]}"></div>
              <div class="Elem" style="background-color: ${this.generaltLista[2]}"></div>
              <div class="Elem" style="background-color: ${this.generaltLista[3]}"></div>
            </div>
      `
    this.#szElem.insertAdjacentHTML("beforeend", html);
  };
}
  

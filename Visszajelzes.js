export default class Visszajelzes {
    #visszajelzesListaM = [];
    #szElem;
    constructor(visszajelzesListaM, szElem) {
        this.#visszajelzesListaM = visszajelzesListaM;
        this.#szElem = szElem;
        this.#megjelenit();
    }
    #megjelenit() {
            let html = `</div><div class="visszajelzes">
                          <div class="vElem" ="background-color:${this.#visszajelzesLista[0]}"}></div>
                          <div class="vElem" style="background-color:${this.#visszajelzesLista[1]}"}></div>
                          <div class="vElem" style="background-color:${this.#visszajelzesLista[2]}"}></div>
                          <div class="vElem" style="background-color:${this.#visszajelzesLista[3]}"}></div>
                        </div>`;

            this.#szElem.insertAdjacentHTML("beforeend", html);
        }
    }

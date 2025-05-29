import Visszajelzes from "./Visszajelzes";

export default class JatekSor {
    #visszajelzesLista = [];
    #szElem;
    #tippLista = [];
    constructor(visszajelzesLista, tippLista,szElem) {
        this.#visszajelzesLista = visszajelzesLista;
        this.#tippLista = tippLista;
        this.#szElem = szElem;
        this.megjelenit();
        
    }

    megjelenit(){
        let html = `<div class="jateksor"> </div>`;
        this.#szElem.insertAdjacentHTML("beforeend", html);
        this.sorSzuloelem=document.querySelector(".jatekter.jateksor:last-child");
        new Visszajelzes(this.#visszajelzesLista, this.sorSzuloelem);
        new Tipp(this.#tippLista, this.sorSzuloelem);
    }
}

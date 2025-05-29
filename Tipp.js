import { tippLista } from "./listak.js";

export default class Tipp {

    #tippLista=[]; 
    #szElem;   

    constructor(tippLista, szElem) {
        this.#tippLista = tippLista;
        this.#szElem = szElem;     
    }

    megjelenit() {
        const jateksorok = this.#szElem.querySelectorAll(".jateksor");

    for (let i = 0; i < this.#tippLista.length; i++) {
        const tippSor = this.#tippLista[i];  
        const jateksorElem = jateksorok[i];
        if (!jateksorElem) continue;
        const sorElem = jateksorElem.querySelector(".sor");
        if (!sorElem) continue;
        const elemek = sorElem.querySelectorAll(".Elem");
        for (let j = 0; j < tippSor.length; j++) {
            const elem = elemek[j];
            if (!elem) continue;
            elem.style.backgroundColor = tippSor[j];
        }
    }
      }
      
    
}
import { szinekLista, generaltLista, tippLista, visszajelzesLista } from "./listak.js";
import Generalt from "./Generalt.js";

export default class Jatek {
    #szinekLista;
    #generaltLista;
    #visszajelzesListaM;
    #tippLista;
    #jatekter;
    #sor;
    #oszlop;

    constructor() {
        this.#szinekLista = szinekLista;
        this.#generaltLista = generaltLista;
        this.#visszajelzesListaM = visszajelzesLista;
        this.#tippLista = tippLista;
        this.#jatekter = document.querySelector(".jatekter");
        this.#sor = 0;
        this.#oszlop = 0;
        this.#init();
    }
    megjelenit(){
        console.log("Játék megjelenítése");
        console.log(this.#visszajelzesListaM[0]);
        console.log(this.#tippLista[0]);
        for (let i = 0; i < 10; i++) {
           new JatekSor(this.#visszajelzesListaM[i], this.#tippLista[i], this.#jatekter);
        }
    }


    generaltListaEloallit(){

    }


    szin1Esemenykezelo(){

    }

    szin2Esemenykezelo(){
        
    }

    szin3Esemenykezelo(){

    }

    szin4Esemenykezelo(){

    }

    szin5Esemenykezelo(){

    }

    szin6Esemenykezelo(){

    }

    #init(){


    }

    visszajelzes(){
        
    }
}
import { szinLista, generaltLista,visszajelzesListaM,tippListaM } from "./listak.js";
import Generalt from "./Generalt.js";

export default class Jatek {
    #szinekLista;
    #generaltLista;
    #visszajelzesListaM;
    #tippListaM;
    #jatekter;
    #sor;
    #oszlop;

    constructor() {
        this.#szinekLista = szinLista;
        this.#generaltLista = generaltLista;
        this.#visszajelzesListaM = visszajelzesListaM;
        this.#tippListaM = tippListaM;
        this.#jatekter = document.querySelector(".jatekter");
        this.#sor = 0;
        this.#oszlop = 0;
        this.#init();
    }
    megjelenit(){
        console.log("Játék megjelenítése");
        console.log(this.#visszajelzesListaM[0]);
        console.log(this.#tippListaM[0]);
        for (let i = 0; i < 10; i++) {
           new JatekSor(this.#visszajelzesListaM[i], this.#tippListaM[i], this.#jatekter);
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
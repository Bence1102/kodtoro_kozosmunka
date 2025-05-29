import { szinLista, generaltLista,visszajelzesListaM,tippListaM } from "./listak.js";
import Generalt from "./Generalt.js";
import JatekSor from "./JatekSor.js";

export default class Jatek {
    #szinLista = szinLista;
    #generaltLista = generaltLista;
    #visszajelzesListaM = visszajelzesListaM;
    #tippListaM = tippListaM;
    #jatekter;
    #sor = 0;
    #oszlop = 0;
    #szin1Elem;
    #szin2Elem;
    #szin3Elem;
    #szin4Elem;
    #szin5Elem;
    #szin6Elem;

    constructor() {
        this.#jatekter = document.querySelector(".jatekter");
        this.#init();
        this.generaltListaEloallit();
        this.megjelenit();
    }
    megjelenit(){
        new Generalt(this.#generaltLista);
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
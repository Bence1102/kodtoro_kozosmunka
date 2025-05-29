import General from "./Generalt.js";
import { generaltLista } from "./listak.js";
import Tipp from "./Tipp.js";
import { tippListaM } from "./listak.js";

const general = new General(generaltLista);




const jatekterElem = document.querySelector(".jatekter");
const tipp = new Tipp(tippListaM, jatekterElem);
tipp.megjelenit();



import Generalt from "./Generalt.js";
import Tipp from "./Tipp.js";
import { generaltLista, tippListaM } from "./listak.js";

const jatekterElem = document.querySelector(".jatekter");
const tipp = new Tipp(tippListaM, jatekterElem);

const generaltElem = document.querySelector(".generalt");
const general = new Generalt(generaltElem, generaltLista)

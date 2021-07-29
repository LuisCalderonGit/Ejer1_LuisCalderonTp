import { calculodias } from "./calculodias.js";
import {FechaVef} from "./FechaVef.js";

const Fecha=prompt("Ingresa la fecha:"," ");
let tipo,day,month,year,numberDays;


[day,month,year,tipo]=FechaVef(Fecha);
numberDays=calculodias(month,day)

console.log(day,month,year);
console.log(numberDays);
console.log(tipo);
alert(`el numero de dias es:${numberDays}`)



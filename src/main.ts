import { Champion } from "./entities/champion.entity";

const c = Champion.getChamp("test");

console.log(c);

console.log(Champion.getAllChamps());
console.log("BYE");
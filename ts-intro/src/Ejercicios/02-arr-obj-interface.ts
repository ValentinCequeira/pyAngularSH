import { createLogicalAnd } from "typescript";
let habilidades: string[] = ["Bash", "Counter", "Healing"];

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: "Strider",
  hp: 100,
  habilidades: ["Bash", "Counter", "Healing"],
};

personaje.puebloNatal = "pueblo paleta";

console.table(personaje);
console.log(personaje);

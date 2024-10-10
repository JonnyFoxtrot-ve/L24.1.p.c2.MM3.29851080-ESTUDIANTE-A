import { Cl_estudiante } from "./Cl_estudiante.js";

export default class Cl_becado extends Cl_estudiante {
  constructor(nombre, acumNotas, cntMaterias) {
    super(nombre, acumNotas, cntMaterias);
  }

  promedioNotas() {
    return this.acumNotas / this.cntMaterias;
  }
  beca() {
    if (this.promedioNotas() > 15) {
      return "Recibe una beca de", 30;
    } else if (this.promedioNotas() >= 10) {
      return "Recibe una beca de", 10;
    } else {
      return "no le corresponde la beca";
    }
  }
}

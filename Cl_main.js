import cl_becado from "./Cl_becado.js";

export default class Cl_main {
  constructor() {
    const estudiante1 = new cl_becado("Mary", 132, 8);
    const estudiante2 = new cl_becado("Alirio", 315, 35);

    //Primer estudiante
    document.getElementById(
      "salida"
    ).innerHTML += `<br>Nombre del estudiante: ${
      estudiante1.nombre
    }<br> Acumulado de notas: ${
      estudiante1.acumNotas
    }<br> Cantidad de materias: ${
      estudiante1.cntMaterias
    }<br> Nota promedio ${estudiante1.promedioNotas()}<br> ${
      estudiante1.nombre
    } $${estudiante1.beca()}<br>`;

    //Segundo estudiante
    document.getElementById(
      "salida"
    ).innerHTML += `<br>Nombre del estudiante: ${
      estudiante2.nombre
    }<br> Acumulado de notas: ${
      estudiante2.acumNotas
    }<br> Cantidad de materias: ${
      estudiante2.cntMaterias
    }<br> Nota promedio ${estudiante2.promedioNotas()}<br>${
      estudiante2.nombre
    } ${estudiante2.beca()}`;
  }
}

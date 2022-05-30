import "./styles.css";

// Definición de variables, Ingreso de la dimensión del arreglo

let dimensionArreglo: number = Number(
  prompt("Ingrese la dimensión de su arreglo.")
);
let arreglo: number[] = new Array(dimensionArreglo);

// Defino funciones para cada acción (almacenar, analizar y mostrar)

function almacenarNúmerosEnArreglo(): number[] {
  for (
    let indiceArreglo = 0;
    indiceArreglo < dimensionArreglo;
    indiceArreglo++
  ) {
    arreglo[indiceArreglo] = Number(
      prompt(
        "Ingrese el número que se ubicará en la posición " + indiceArreglo + "."
      )
    );
  }
  return arreglo;
}
function analizarYMostrarPositivosNegativosYCeros(): string {
  let acumuladorDeCeros: number = 0;
  let acumuladorDePositivos: number = 0;
  let acumuladorDeNegativos: number = 0;

  for (let indiceArreglo = 0; indiceArreglo < arreglo.length; indiceArreglo++) {
    if (arreglo[indiceArreglo] === 0) {
      acumuladorDeCeros++;
    } else if (arreglo[indiceArreglo] > 0) {
      acumuladorDePositivos++;
    } else {
      acumuladorDeNegativos++;
    }
  }

  return (
    acumuladorDePositivos +
    " números positivos, " +
    acumuladorDeNegativos +
    " números negativos y " +
    acumuladorDeCeros +
    " ceros."
  );
}

// Muestro por consola el arreglo ingresado y sus tipos de números, Llamo a las funciones

console.log("Entrada:", almacenarNúmerosEnArreglo());
console.log("Salida:", analizarYMostrarPositivosNegativosYCeros());

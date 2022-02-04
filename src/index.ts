function suma(operacion: number, numero1: number, numero2: number): number {
  if (operacion === 1) {
    let suma: Number = numero1 + numero2;

    console.log(numero1);
    console.log("+");
    console.log(numero2);
    console.log("El resultado de la suma es " + suma);
  } else {
    console.log("para realizar una suma debe ingresar el 1 como operador");
  }
  return;
}

function resta(operacion: number, numero1: number, numero2: number): number {
  if (operacion === 2) {
    let resta: number = numero1 - numero2;

    console.log(numero1);
    console.log("-");
    console.log(numero2);
    console.log("El resultado de la resta es " + resta);
  } else {
    console.log("para realizar una resta debe ingresar el 2 como operador");
  }
  return;
}

function multiplicar(
  operacion: number,
  numero1: number,
  numero2: number
): number {
  if (operacion === 3) {
    let multiplicar: number = numero1 * numero2;

    console.log(numero1);
    console.log("*");
    console.log(numero2);
    console.log("El resultado de la multiplicación es " + multiplicar);
  } else {
    console.log(
      "para realizar una multiplicaciòn debe ingresar el 3 como operador"
    );
  }
  return;
}

function dividir(operacion: number, numero1: number, numero2: number): number {
  if (operacion === 4) {
    let dividir = numero1 / numero2;

    console.log(numero1);
    console.log("/");
    console.log(numero2);
    console.log("El resultado de la división es " + dividir);
  } else {
    console.log("para realizar una divisiòn debe ingresar el 4 como operador");
  }
  return;
}

let totalsuma: number = suma(1, 3, 4);

console.log(totalsuma);

let totalresta: number = resta(2, 6, 4);

console.log(totalresta);

let totalmultiplicacion: number = multiplicar(3, 2, 6);

console.log(totalmultiplicacion);

let totaldivision: number = dividir(4, 2, 3);

console.log(totaldivision);

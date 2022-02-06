let operaciondecalculo: number = Number(
  prompt(
    "Ingrese el tipo de calculo que desea hacer:1 para suma, 2 para resta, 3 para multiplicación y 4 para división"
  )
);

function suma(numero1: number, numero2: number): number {
  let suma: Number = numero1 + numero2;

  console.log(numero1);
  console.log("+");
  console.log(numero2);
  console.log("El resultado de la suma es " + suma);

  return;
}

function resta(numero1: number, numero2: number): number {
  let resta: number = numero1 - numero2;

  console.log(numero1);
  console.log("-");
  console.log(numero2);
  console.log("El resultado de la resta es " + resta);

  return;
}

function multiplicar(numero1: number, numero2: number): number {
  let multiplicar: number = numero1 * numero2;

  console.log(numero1);
  console.log("*");
  console.log(numero2);
  console.log("El resultado de la multiplicación es " + multiplicar);

  return;
}

function dividir(numero1: number, numero2: number): number {
  let dividir = numero1 / numero2;

  console.log(numero1);
  console.log("/");
  console.log(numero2);
  console.log("El resultado de la división es " + dividir);

  return;
}

switch (operaciondecalculo) {
  case 1:
    let totalsuma: number = 0;
    totalsuma = suma(1, 3);

    console.log(totalsuma);
    break;
  case 2:
    let totalresta: number = 0;
    totalresta = resta(2, 6);

    console.log(totalresta);
    break;
  case 3:
    let totalmultiplicacion: number = 0;
    totalmultiplicacion = multiplicar(5, 6);

    console.log(totalmultiplicacion);
    break;
  case 4:
    let totaldivision: number = 0;
    totaldivision = dividir(4, 2);

    console.log(totaldivision);
    break;
  default:
    break;
}

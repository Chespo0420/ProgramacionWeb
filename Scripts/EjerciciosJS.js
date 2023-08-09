function redireccionar() {

  window.location.href = "EjerciciosJS.html";
}
//-------EJERCICIO 1-------


function mostrarEstadoDelDia() {

  var estado_del_dia = prompt("¿Cómo está el día de hoy? (soleado, nublado, lloviendo)");


  var resultado = document.getElementById("resultado1");
  resultado.textContent = "El día de hoy está " + estado_del_dia;
}

//-------EJERCICIO 2-------


function calcularAreaYPerimetro() {

  var radio = parseFloat(document.getElementById("radio").value);


  if (isNaN(radio) || radio <= 0) {
    alert("Por favor, ingrese un valor de radio válido.");
    return;
  }


  var PI = Math.PI;
  var area = PI * Math.pow(radio, 2);
  var perimetro = 2 * PI * radio;


  var areaElemento = document.getElementById("area");
  var perimetroElemento = document.getElementById("perimetro");
  areaElemento.textContent = area.toFixed(2);
  perimetroElemento.textContent = perimetro.toFixed(2);
}

//-------EJERCICIO 3-------


function verificarEdad() {

  var edad = parseInt(document.getElementById("edad").value);


  if (isNaN(edad) || edad < 0) {
    alert("Por favor, ingrese una edad válida.");
    return;
  }


  if (edad >= 18) {
    document.getElementById("mensajeEdad").textContent = "¡Eres mayor de edad!";
  } else {
    document.getElementById("mensajeEdad").textContent = "Eres menor de edad.";
  }
}

//-------EJERCICIO 4-------


function verificarCaracter() {

  var caracter = document.getElementById("caracter").value.toUpperCase();


  if (caracter === 'S' || caracter === 'N') {
    document.getElementById("mensajeCaracter").textContent = "CORRECTO";
  } else {
    document.getElementById("mensajeCaracter").textContent = "INCORRECTO";
  }
}

//-------EJERCICIO 5-------


function calcularResultado() {

  var valor1 = parseInt(document.getElementById("valor1").value);
  var valor2 = parseInt(document.getElementById("valor2").value);
  var operacion = document.getElementById("operacion").value.toUpperCase();


  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, ingrese valores numéricos válidos.");
    return;
  }


  var resultado;
  switch (operacion) {
    case 'S':
      resultado = valor1 + valor2;
      break;
    case 'R':
      resultado = valor1 - valor2;
      break;
    case 'M':
      resultado = valor1 * valor2;
      break;
    case 'D':
      resultado = valor1 / valor2;
      break;
    default:
      alert("Por favor, seleccione una operación válida (S, R, M o D).");
      return;
  }


  document.getElementById("resultado5").textContent = "El resultado es: " + resultado;
}
//-------EJERCICIO 6-------

function verificarParImpar() {

  var numero = parseInt(document.getElementById("numero").value);


  if (isNaN(numero)) {
    alert("Por favor, ingrese un número entero válido.");
    return;
  }


  var mensaje;
  if (numero === 0) {
    mensaje = "El número no es par ni impar.";
  } else if (numero % 2 === 0) {
    mensaje = "El número es par.";
  } else {
    mensaje = "El número es impar.";
  }


  document.getElementById("mensajeParImpar").textContent = mensaje;
}
//-------EJERCICIO 7-------

function sumaHastaLimite() {

  var limite = parseInt(document.getElementById("limite").value);


  if (isNaN(limite) || limite <= 0) {
    alert("Por favor, ingrese un valor límite positivo válido.");
    return;
  }

  var suma = 0;
  var numerosIngresados = [];

  while (suma <= limite) {

    var numero = parseInt(prompt("Ingrese un número:"));


    if (isNaN(numero)) {
      alert("Por favor, ingrese un número válido.");
      continue;
    }


    numerosIngresados.push(numero);


    suma = numerosIngresados.reduce((a, b) => a + b, 0);
  }


  var numerosElemento = document.getElementById("numerosIngresados");
  numerosElemento.textContent = "Números ingresados: " + numerosIngresados.join(", ");
  var sumaElemento = document.getElementById("sumaFinal");
  sumaElemento.textContent = "Suma final: " + suma;
}

//-------EJERCICIO 8-------
function leerNumerosYCalcular() {
  var numeros = [];
  var numero;

  do {
    numero = parseInt(prompt("Ingrese un número entero (0 para finalizar):"));


    if (isNaN(numero)) {
      alert("Por favor, ingrese un número entero válido.");
    } else if (numero !== 0) {

      numeros.push(numero);
    }
  } while (numero !== 0);
  var maximo = Math.max(...numeros);
  var minimo = numeros.length > 0 ? Math.min(...numeros) : 0;
  var promedio = numeros.length > 0 ? numeros.reduce((a, b) => a + b, 0) / numeros.length : 0;
  var maximoElemento = document.getElementById("maximo");
  var minimoElemento = document.getElementById("minimo");
  var promedioElemento = document.getElementById("promedio");
  maximoElemento.textContent = "Máximo: " + maximo;
  minimoElemento.textContent = "Mínimo: " + minimo;
  promedioElemento.textContent = "Promedio: " + promedio;
}
//-------EJERCICIO 9-------

function mostrarFraseConEspacios() {

  var frase = prompt("Ingrese una frase:");
  if (!frase) {
    alert("Por favor, ingrese una frase válida.");
    return;
  }
  var fraseConEspacios = frase.split("").join(" ");
  var resultadoElemento = document.getElementById("resultadoFrase");
  resultadoElemento.textContent = fraseConEspacios;
}
//-------EJERCICIO 10-------
const palabraAlReves = (palabra) => {
  return palabra.split("").reverse().join("");
};
function mostrarPalabraAlReves() {
  var palabra = document.getElementById("palabra").value;
  if (!palabra) {
    alert("Por favor, ingrese una palabra.");
    return;
  }
  var palabraAlRevesResultado = palabraAlReves(palabra);
  var resultadoElemento = document.getElementById("resultadoPalabra");
  resultadoElemento.textContent = palabraAlRevesResultado;
}

//-------EJERCICIO 11-------
function obtenerPalabraMasLarga(texto) {
  var palabras = texto.split(" ");
  var palabraMasLarga = "";
  for (var i = 0; i < palabras.length; i++) {
    if (palabras[i].length > palabraMasLarga.length) {
      palabraMasLarga = palabras[i];
    }
  }
  return palabraMasLarga;
}
function mostrarPalabraMasLarga() {
  var texto = document.getElementById("texto").value;
  if (!texto) {
    alert("Por favor, ingrese un texto.");
    return;
  }
  var palabraMasLargaResultado = obtenerPalabraMasLarga(texto);
  var resultadoElemento = document.getElementById("resultadoPalabraMasLarga");
  resultadoElemento.textContent = palabraMasLargaResultado;
}

//-------EJERCICIO 12-------
const obtenerTipoDato = (dato) => {
  if (typeof dato === 'string') {
    try {
      const parsedDato = eval(`(${dato})`);
      const type = typeof parsedDato;
      if (type === 'object') {
        if (Array.isArray(parsedDato)) {
          return 'Array';
        } else if (parsedDato === null) {
          return 'null';
        } else if (parsedDato instanceof Date) {
          return 'Date';
        }
      }
      return type;
    } catch (error) {
      return 'Tipo de dato no reconocido';
    }
  } else {
    return typeof dato;
  }
};
function mostrarTipoDato() {
  var dato = document.getElementById("dato").value;
  var tipoDato = obtenerTipoDato(dato);
  var resultadoElemento = document.getElementById("resultadoTipoDato");
  resultadoElemento.textContent = "El tipo de dato de '" + dato + "' es: " + tipoDato;
}

//-------EJERCICIO 13-------
const mostrarPropiedadesPersona = () => {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad1").value);
  const sexo = document.getElementById("sexo").value;
  const peso = parseInt(document.getElementById("peso").value);
  const altura = parseInt(document.getElementById("altura").value);
  let sexoCompleto;
  switch (sexo.toUpperCase()) {
    case 'H':
      sexoCompleto = 'Hombre';
      break;
    case 'M':
      sexoCompleto = 'Mujer';
      break;
    case 'O':
      sexoCompleto = 'Otro';
      break;
    default:
      sexoCompleto = 'Desconocido';
  }
  const persona = {
    nombre: nombre,
    edad: edad,
    sexo: sexoCompleto,
    peso: peso,
    altura: altura
  };
  const resultadoElemento = document.getElementById("resultadoPersona");
  let mensaje = "Propiedades del objeto persona:\n";
  for (let propiedad in persona) {
    mensaje += `${propiedad}: ${persona[propiedad]}\n`;
  }
  resultadoElemento.textContent = mensaje;
};
//-------EJERCICIO 14-------
const libro = {
  ISBN: "",
  titulo: "",
  autor: "",
  numPaginas: 0,
  cargarLibro: function () {
    this.ISBN = document.getElementById("isbn").value;
    this.titulo = document.getElementById("titulo").value;
    this.autor = document.getElementById("autor").value;
    this.numPaginas = parseInt(document.getElementById("numPaginas").value);
  },
  mostrarInformacion: function () {
    const resultadoElemento = document.getElementById("resultadoLibro");
    let mensaje = `Información del libro:\nISBN: ${this.ISBN}\nTítulo: ${this.titulo}\nAutor: ${this.autor}\nNúmero de páginas: ${this.numPaginas}`;
    resultadoElemento.textContent = mensaje;
  },
};
function cargarYMostrarLibro() {
  libro.cargarLibro();
  libro.mostrarInformacion();
}

//-------EJERCICIO 15-------
const circulo = {
  radio: 0,
  calcularArea: function () {
    return Math.PI * Math.pow(this.radio, 2);
  },
  calcularPerimetro: function () {
    return 2 * Math.PI * this.radio;
  },
};
function calcularYMostrarResultados() {
  const radio = parseFloat(document.getElementById("radio15").value);
  if (isNaN(radio) || radio <= 0) {
    document.getElementById("area15").textContent = "Ingrese un valor de radio válido.";
    document.getElementById("perimetro15").textContent = "";
    return;
  }
  circulo.radio = radio;
  const area = circulo.calcularArea();
  const perimetro = circulo.calcularPerimetro();
  document.getElementById("area15").textContent = `Área del círculo: ${area.toFixed(2)}`;
  document.getElementById("perimetro15").textContent = `Perímetro del círculo: ${perimetro.toFixed(2)}`;
}

//-------EJERCICIO 16-------
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function rellenarYMostrarVectores() {
  const vector1 = [];
  const vector2 = [];
  for (let i = 0; i < 5; i++) {
    vector1.push(generarNumeroAleatorio(1, 100));
    vector2.push(generarNumeroAleatorio(1, 100));
  }
  const resultado16 = document.getElementById("resultado16");
  resultado16.textContent = `Vector 1: [${vector1.join(", ")}]\nVector 2: [${vector2.join(", ")}]`;
  vector1Global = vector1;
  vector2Global = vector2;
}
let vector1Global = [];
let vector2Global = [];

//-------EJERCICIO 17-------
function eliminarDosUltimosElementos(vector) {
  vector.splice(-2);
}
function eliminarDosUltimosElementosYMostrar() {
  eliminarDosUltimosElementos(vector1Global);
  eliminarDosUltimosElementos(vector2Global);

  mostrarVectorEnPre(vector1Global, "resultado17");
  mostrarVectorEnPre(vector2Global, "resultado18");
}
function mostrarVectorEnPre(vector, resultadoId) {
  const resultado = document.getElementById(resultadoId);

  if (resultadoId === "resultado17") {
    resultado.textContent = `Vector 1: [${vector.join(", ")}]`;
  } else if (resultadoId === "resultado18") {
    resultado.textContent = `Vector 2: [${vector.join(", ")}]`;
  }
}

//-------EJERCICIO 18-------
function compararTextos() {
  var valores = [true, 5, false, "hola", "adios", 2];
  var texto1 = valores[3];
  var texto2 = valores[4];
  var textoMayor = (texto1.length > texto2.length) ? texto1 : texto2;
  var resultadoTexto = `El texto más largo es: "${textoMayor}"`;
  mostrarResultado("resultado18a", resultadoTexto);
}
function operadoresBooleanos() {
  var valores = [true, 5, false, "hola", "adios", 2];
  var valorBooleano1 = valores[0];
  var valorBooleano2 = valores[2];
  var resultadoTrue = valorBooleano1 || valorBooleano2;
  var resultadoFalse = valorBooleano1 && valorBooleano2;
  var resultadoOperadores = `Resultado True: ${resultadoTrue}, Resultado False: ${resultadoFalse}`;
  mostrarResultado("resultado18b", resultadoOperadores);
}
function operacionesMatematicas() {
  var valores = [true, 5, false, "hola", "adios", 2];
  var numero1 = valores[1];
  var numero2 = valores[5];
  var suma = numero1 + numero2;
  var resta = numero1 - numero2;
  var multiplicacion = numero1 * numero2;
  var division = numero1 / numero2;
  var potencia = numero1 ** numero2;
  var resultadoOperaciones = `Suma: ${suma}, Resta: ${resta}, Multiplicación: ${multiplicacion}, División: ${division}, Potencia'2: ${potencia}`;
  mostrarResultado("resultado18c", resultadoOperaciones);
}
function mostrarResultado(resultadoId, mensaje) {
  const resultado = document.getElementById(resultadoId);
  resultado.textContent = mensaje;
}

/*EJERCICIO 19*/

let arregloA = [];
let arregloB = [];
function generarArregloA() {
  arregloA = [];
  for (let i = 0; i < 50; i++) {
    arregloA.push((Math.random() * 100).toFixed(2));
  }
  mostrarArregloA();
}
function ordenarYCombinarArreglos() {
  arregloA.sort((a, b) => a - b);
  arregloB = arregloA.slice(0, 10);
  for (let i = 0; i < 10; i++) {
    arregloB.push(0.5);
  }
  mostrarArreglosOrdenados();
}
function mostrarArregloA() {
  const resultadoA = document.getElementById("resultadoA");
  resultadoA.textContent = `Arreglo A: [${arregloA.join(", ")}]`;
}
function mostrarArreglosOrdenados() {
  const resultadoB = document.getElementById("resultadoB");
  resultadoB.textContent = `Arreglo A Ordenado: [${arregloA.join(", ")}]\nArreglo B Combinado: [${arregloB.join(", ")}]`;
}
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
//-------------------17B------------
const vector = [];
const vectorSpan = document.getElementById("vector");
const inputValor = document.getElementById("inputValor");

function agregarValor() {
  const valor = parseFloat(inputValor.value);
  if (!isNaN(valor)) {
    vector.push(valor);
    actualizarVector();
    inputValor.value = "";
  }
}
function agregarValorConEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    agregarValor();
  }
}
function eliminarUltimosDos() {
  if (vector.length >= 2) {
    vector.splice(-2);
    actualizarVector();
  }
}
function actualizarVector() {
  vectorSpan.textContent = `[${vector.join(", ")}]`;
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

//-------EJERCICIO 20-------
function obtenerArrayModificado() {
  const matrizOriginal = [[3], [6], [9], [12], [15]];
  const arrayModificado = [];
  for (let i = 0; i < matrizOriginal.length; i++) {
    arrayModificado.push(matrizOriginal[i][0] + 3);
  }
  const resultadoOriginal = document.getElementById("resultadoOriginal");
  const resultadoModificado = document.getElementById("resultadoModificado");
  resultadoOriginal.textContent = `Matriz Original: [${matrizOriginal.map(arr => arr[0]).join(", ")}]`;
  resultadoModificado.textContent = `Array Modificado: [${arrayModificado.join(", ")}]`;
}
//ej20 mathias
function ej20() {
  const matrizz = document.getElementById("matriz");
  const matrizAArray = document.getElementById("matrizaarray");
  var matriz = [[3], [6], [9], [12], [15]]

  matrizz.textContent = "la matriz original es : " + JSON.stringify(matriz, null);


  matrizAArray.textContent = "pasado a array es : " + JSON.stringify(matriz.flat(), null);


}

//-------EJERCICIO 21-------
document.getElementById("formularioPersona").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const propiedades = [];
  for (const [key, value] of formData) {
    if (value.trim() === "") {
      propiedades.push(`${key}: Sin valor`);
    } else {
      propiedades.push(`${key}: ${value}`);
    }
  }
  const resultado = document.getElementById("resultado21");
  resultado.textContent = `Propiedades de la Persona: [${propiedades.join(", ")}]`;
});

//-------EJERCICIO 22-------
function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje").value;
  if (mensaje.trim() !== "") {
    alert(mensaje);
  } else {
    alert("Por favor, ingresa un mensaje antes de mostrarlo.");
  }
}

//-------EJERCICIO 23-------
document.addEventListener("DOMContentLoaded", function () {
  resaltarTextoEjemplo();
});

function resaltarTextoEjemplo() {
  const textoEjemplo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut tortor leo.";
  const palabrasEjemplo = textoEjemplo.split(/\s+/); // Utilizamos una expresión regular para dividir por espacios y eliminar saltos de línea
  const palabrasResaltadasEjemplo = palabrasEjemplo.map(palabra =>
    palabra.length >= 8 ? `<span class="resaltado">${palabra}</span>` : palabra
  );
  document.getElementById("textoresaltado").innerHTML = palabrasResaltadasEjemplo.join(" ");
}

function resaltarTexto() {
  const inputTexto = document.getElementById("inputTexto").value;
  const textoLimpio = inputTexto.replace(/\n/g, " "); // Reemplazamos saltos de línea por espacios
  const palabras = textoLimpio.split(/\s+/); // Utilizamos una expresión regular para dividir por espacios y eliminar saltos de línea
  const palabrasResaltadas = palabras.map(palabra =>
    palabra.length >= 8 ? `<span class="resaltado">${palabra}</span>` : palabra
  );
  document.getElementById("textoresaltado").innerHTML = palabrasResaltadas.join(" ");
}


//-------EJERCICIO 24-------
function calcularCirculo() {
  const radio = parseFloat(document.getElementById("radio24").value);

  const area = Math.PI * radio * radio;
  const perimetro = 2 * Math.PI * radio;

  const resultadoArea = document.getElementById("resultadoArea24");
  const resultadoPerimetro = document.getElementById("resultadoPerimetro24");

  resultadoArea.textContent = `Área del círculo: ${area.toFixed(2)}`;
  resultadoPerimetro.textContent = `Perímetro del círculo: ${perimetro.toFixed(2)}`;
}

//-------EJERCICIO 25-------
function getFormValores() {
  const nombre = document.forms["form1"]["nombre"].value;
  const apellido = document.forms["form1"]["apellido"].value;

  const mensaje = `Nombre: ${nombre}, Apellido: ${apellido}`;
  const mensajeFormulario = document.getElementById("nombreApellido");
  mensajeFormulario.textContent = mensaje;
}

//---------------------EXTRASSSSS-----------------
//EJERCICIO EXTRA 1 :
function encontrarMayorMenor() {
  const inputNumeros = document.getElementById("numeros").value;
  const numeros = inputNumeros.split(",").map(Number);
  if (numeros.length === 0) {
    document.getElementById("resultadoExtra1").textContent = "Por favor, ingrese al menos un número.";
    return;
  }
  const mayor = Math.max(...numeros);
  const menor = Math.min(...numeros);
  document.getElementById("resultadoExtra1").textContent = `El mayor número es ${mayor} y el menor número es ${menor}.`;
}

//-------EJERCICIO EXTRA 2-------

function contarVocales() {
  const frase = document.getElementById("frase").value.toLowerCase();
  const vocales = "aeiouáéíóú";
  const contadorVocales = {};

  for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i])) {
      if (contadorVocales[frase[i]]) {
        contadorVocales[frase[i]]++;
      } else {
        contadorVocales[frase[i]] = 1;
      }
    }
  }

  let resultado = "Cantidad de cada vocal:\n";
  for (const vocal in contadorVocales) {
    resultado += `${vocal}: ${contadorVocales[vocal]}\n`;
  }

  document.getElementById("resultadoExtra2").textContent = resultado;
}
//-------EJERCICIO EXTRA 3-------
function calcularSuma() {
  const numerosInput = document.getElementById("numerosInput").value;
  const numerosArray = numerosInput.split(",").map(num => parseFloat(num.trim()));

  const suma = numerosArray.reduce((total, num) => total + num, 0);

  const resultadoSuma = document.getElementById("resultadoSuma");
  resultadoSuma.textContent = `La suma de los números es: ${suma}`;
}

//-------EJERCICIO EXTRA 4-------
function mostrarNumerosPrimos() {
  const numeroInput = parseInt(document.getElementById("numeroInput").value);

  const numerosPrimos = [];
  for (let i = 2; i <= numeroInput; i++) {
    if (esPrimo(i)) {
      numerosPrimos.push(i);
    }
  }

  const resultadoPrimos = document.getElementById("resultadoPrimos");
  resultadoPrimos.textContent = `Números primos menores o iguales a ${numeroInput}: ${numerosPrimos.join(", ")}`;
}

function esPrimo(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}
//-------EJERCICIO EXTRA 5-------
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function verificarPrimo() {
  const numero = parseInt(document.getElementById("numeroPrimo").value);
  const resultado = esPrimo(numero) ? "Es primo" : "No es primo";
  document.getElementById("resultadoPrimoDistinto").textContent = resultado;
}

//-------EJERCICIO EXTRA 6-------
function calcularFibonacci(cantidad) {
  const resultadoFibonacci = document.getElementById("resultadoFibonacci");
  resultadoFibonacci.textContent = "Serie de Fibonacci: ";

  let num1 = 0, num2 = 1;

  for (let i = 0; i < cantidad; i++) {
    resultadoFibonacci.textContent += num1 + " ";

    const siguienteNum = num1 + num2;
    num1 = num2;
    num2 = siguienteNum;
  }
}

//-------EJERCICIO EXTRA 7-------

function ordenarNumerosExtra7() {
  const numerosInput = document.getElementById("numerosInputExtra7").value;
  const numerosArray = numerosInput.split(",").map(Number);

  const numerosOrdenados = numerosArray.slice().sort((a, b) => a - b);

  document.getElementById("resultadoOrdenadoExtra7").textContent = `Arreglo Ordenado: [${numerosOrdenados.join(", ")}]`;
}

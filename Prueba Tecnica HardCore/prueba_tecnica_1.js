// 1.- Invertir cadena de texto, con y sin metodos de JS

// Con metodos
const invertirCadena = "Christian"
// Separamos la cadena de texto en un array, invertimos el array y volvemos a unir.
const nuevaPalabra = invertirCadena.split("").reverse().join("")
console.log(nuevaPalabra)

// Sin metodos
const invertirCadena2 = "Christian";
let nuevaPalabra2 = ""; // Creamos una variable vacia para almacenar la nueva palabra

// Recorremos la cadena de texto de atras hacia adelante
for (let i of invertirCadena2) {
    nuevaPalabra2 = i + nuevaPalabra2; // Concatenamos la nueva palabra con la letra actual
}
console.log(nuevaPalabra2)

// 2.- Contar elementos repetidos

// Con metodos
const repetidos = [1, 2, 3, 10, 4, 5, 6, 2, 7, 4, 8, 9, 3, 10, 5, 5, 1];
/* Creamos un nuevo array con los elementos unicos del array repetidos y 
luego creamos un objeto para contar cuantas veces se repite cada elemento */
const resultado = [...new Set(repetidos)].map(num => {
    return {
        numero: num,
        cantidad: repetidos.filter(n => n === num).length
        // El objeto nos dice el numero y la cantidad de veces que se repite.
    }
});
console.log(resultado)

// Sin metodos
const repetidos2 = [1, 20, 3, 10, 40, 5, 6, 20, 7, 40, 8, 9, 3, 10, 5, 5, 1];
const resultado2 = []; // Creamos un array vacio para almacenar los elementos unicos
for (const i of repetidos2) {
    let newElement = true; // Creamos una variable para saber si el elemento ya existe.
    for (const res of resultado2) {
        if (res.element == i) {
            res.count++; // Si el elemento ya existe, aumentamos el contador
            newElement = false; // Cambiamos el valor de la variable
        }
    }
    if (newElement) {
        resultado2[resultado2.length] = { // Si el elemento no existe, lo agregamos al array
            element: i,
            count: 1
        }
    }
}
console.log(resultado2)

// 3.- Crear un array de elementos separados por espacios

// Con metodos
const palabrasEspaciadas = "¿Hola Christian  como   estas    hoy?";
// Eliminamos los espacios de mas y luego separamos la cadena de texto en un array
const arrayPalabras = palabrasEspaciadas.replace(/\s+/g, ' ').split(" ");
console.log(arrayPalabras)

// Sin metodos
const palabrasEspaciadas2 = "¿Hola Christian  como   estas    hoy?";
const arrayPalabras2 = []; // Creamos un array vacio para almacenar las palabras
let palabra = ""; // Creamos una variable para almacenar la palabra actual
for (const i of palabrasEspaciadas2) {
    if (i !== " ") {
        palabra += i; // Si el caracter no es un espacio, lo concatenamos a la palabra
    } else if (palabra.length > 0) {
        arrayPalabras2[arrayPalabras2.length] = palabra; // Si es un espacio, agregamos la palabra al array
        palabra = ""; // Reseteamos la palabra
    }
}
if (palabra.length > 0) {
    arrayPalabras2[arrayPalabras2.length] = palabra; // Si la palabra no se agrego al array, la agregamos
}
console.log(arrayPalabras2)
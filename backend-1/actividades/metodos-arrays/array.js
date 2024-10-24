/*
Descripción de la actividad. 
Dados los objetos indicados en la siguiente diapositiva:
Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades)
Consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)
*/

const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]
console.log(objetos)

//Separar las claves de sus valores

const objetosAFiltrar = objetos.map(objeto => Object.keys(objeto));;

console.log(objetosAFiltrar)

//Crear un array con todas las claves en 1 array.

const objetosFiltrados = objetosAFiltrar.flat();

console.log(objetosFiltrados)

//Se elimina las claves duplicadas

const objetosSinDuplicar = [...new Set(objetosFiltrados)];

console.log(objetosSinDuplicar)

//Obtener los productos vendidos

const acumulador = {};

objetos.forEach(objeto => {
    Object.entries(objeto).forEach(([producto, cantidad]) => {
        if (!acumulador[producto]) {
            acumulador[producto] = 0; // Inicializa si el producto no existe aún
        }
        acumulador[producto] += cantidad; // Suma la cantidad al total

    });
});

console.log(acumulador)
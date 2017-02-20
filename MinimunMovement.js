// Problema:
// Sea un array A con N numeros, 1 < N <= 10^5
// Donde A contiene numeros aleatorios no repetidos desde 1 hasta N

// Ejemplo: A = [5,6,1,3,2,4]

// Pregunta:
// Obtener la cantidad minima de intercambios necesarios para ordenarlo de forma ascendente.

//Ejemplo:
/*

5,6,1,3,2,4
1,6,5,3,2,4
1,2,5,3,6,4
1,2,3,5,6,4
1,2,3,4,6,5
1,2,3,4,5,6

*/

function selectionSort(items) {
    var length = items.length;
    // contador para observar cuantas veces se ha intercambiado.
    var count = 0;
    for (var i = 0; i < length - 1; i++) {
        // Solo para inicializar, suponemos que el primer elemento es el minimo de todos.
        var min = i
        // Con el resto de array, sin considerar el minimo, 
        // Recorrer todo el resto del array para encontrar el minimo
        for (var j = i + 1; j < length; j++) {
            // Caso encuentra un minimo menor que definido al inicio, guardarlo para despues hacer el intercambio
            if(items[j] < items[min]) {
                min = j;
            }
        }
        // Realizar el intercambio, solo en caso el minimo indicado por defecto no sea el real minimo.
        if (min != i) {
            var tmp = items[i];
            items[i] = items[min];
            items[min] = tmp;
            count++;
        }
    }
    console.log("Cantidad de intercambios:", count);
    return items;
}

items = [5,6,1,3,2,4];
console.log("Array desordenado:", items);
output = selectionSort(items);
console.log("Array ordenado:", output);

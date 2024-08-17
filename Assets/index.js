
// Lista de ciudades 
let ciudades = ["Lima", "Cusco", "Arequipa", "Trujillo", "Iquitos", "Cajamarca", "Ayacucho"];

/*
Haciendo una búsqueda de ciudad mediante el ciclo for y codicionales
dentro de una función. También se ha incluido la función flecha
y el uso de condición ternario.
*/


const buscarCiudad = ciudad => {
    let encontrada = false;
    for (let i = 0; i < ciudades.length; i++) {
        if (ciudad === ciudades[i]) {
            encontrada = true;
            break; 
        }
    }
    return alert(`${ciudad} ${encontrada===true ? 'está' : 'no está'} dentro de la lista de ciudades`);
};

let ciudad = prompt("Indique una ciudad");
buscarCiudad(ciudad);



// SEGUNDA FORMA A CONSIDERAR

/*
const buscarCiudad = ciudad => 
    ciudades.includes(ciudad) ? 
        alert(`${ciudad} está dentro de la lista de ciudades`) :
        alert(`${ciudad} no está dentro de la lista de ciudades`);

let ciudad = prompt("Indique una ciudad");
buscarCiudad(ciudad);
*/







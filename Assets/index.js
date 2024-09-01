// Creación de objetos dentro de un array 

let ciudades = [
    { nombre: "Lima", temperatura: 20, humedad: 70 },
    { nombre: "Cusco", temperatura: 15, humedad: 50 },
    { nombre: "Arequipa", temperatura: 18, humedad: 40 },
    { nombre: "Trujillo", temperatura: 22, humedad: 65 },
    { nombre: "Iquitos", temperatura: 25, humedad: 80 },
    { nombre: "Cajamarca", temperatura: 14, humedad: 55 },
    { nombre: "Ayacucho", temperatura: 17, humedad: 45 },
    { nombre: "Chiclayo", temperatura: 24, humedad: 75 }, 
    { nombre: "Piura", temperatura: 26, humedad: 70 },   
    { nombre: "Huancayo", temperatura: 16, humedad: 58 }, 
    { nombre: "Puno", temperatura: 10, humedad: 60 },   
    { nombre: "Tumbes", temperatura: 28, humedad: 85 },  
    { nombre: "Tacna", temperatura: 18, humedad: 45 },  
    { nombre: "Puerto Maldonado", temperatura: 27, humedad: 82 }
];


// La siguiente función realiza la búsqueda de la ciudad y retorna los valores de la temperatura y humedad
const buscarCiudad = ciudad => {

    let ciudadEncontrada = ciudades.find(c => c.nombre.toLowerCase() === ciudad.toLowerCase());

    let resultadoDiv = document.getElementById("resultado");

    if (ciudadEncontrada) {
        alert("Ciudad encontrada")
        resultadoDiv.textContent = `Temperatura actual: ${ciudadEncontrada.temperatura}°C, 
                                    Humedad: ${ciudadEncontrada.humedad}%`;
    } else {
        alert(`${ciudad} no está en la lista de ciudades.`);
    }
};


document.getElementById("buscar").addEventListener("click", () => {
    let ciudad = document.getElementById("ciudad").value; 
    buscarCiudad(ciudad);
});


// Esta función permite realizar un resumen de ciudades con temperatura mayor a un valor determinado 
const ciudadesCalientes = ciudades.filter(c => c.temperatura > 20);
console.log("Ciudades con temperatura mayor a 20°C:", ciudadesCalientes);




/* ------------------------------------------------------------------------------------- */


// Aquí presento otra alternativa a la función de buscarCiudad usando bucles


/*
const buscarCiudad = ciudad => {
    ciudad = ciudad.toLowerCase();
    let ciudadEncontrada = null;

    for (let i = 0; i < ciudades.length; i++) {
        if (ciudades[i].nombre.toLowerCase() === ciudad) {
            ciudadEncontrada = ciudades[i];
            break; 
        }
    }

    let resultadoDiv = document.getElementById("resultado");

    if (ciudadEncontrada) {
        resultadoDiv.textContent = `${ciudadEncontrada.nombre} está en la lista. 
        Temperatura actual: ${ciudadEncontrada.temperatura}°C, 
        Humedad: ${ciudadEncontrada.humedad}%`;
    } else {
        alert(`${ciudad} no está en la lista de ciudades.`);
    }
};
*/





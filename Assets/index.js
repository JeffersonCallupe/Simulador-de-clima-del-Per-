
// Clase para las ciudaddes 
class Ciudad {
    constructor(nombre, temperatura, humedad) {
        this.nombre = nombre;
        this.temperatura = temperatura;
        this.humedad = humedad;
    }
}

// Clase para la búsqueda y filtrado
class GestorDeCiudades {
    constructor(ciudades) {
        this.ciudades = ciudades;
    }

    // Método para buscar ciudad
    buscarCiudad(nombreCiudad) {
        let ciudadEncontrada = this.ciudades.find(c => c.nombre.toLowerCase() === nombreCiudad.toLowerCase());
        return ciudadEncontrada;
    }

    // Método para obtener ciudades con temperatura 
    obtenerCiudadesCalientes(temperaturaMinima) {
        return this.ciudades.filter(c => c.temperatura > temperaturaMinima);
    }
}

// Array de objetos de las ciudadades 
let ciudades = [
    new Ciudad("Lima", 20, 70),
    new Ciudad("Cusco", 15, 50),
    new Ciudad("Arequipa", 18, 40),
    new Ciudad("Trujillo", 22, 65),
    new Ciudad("Iquitos", 25, 80),
    new Ciudad("Cajamarca", 14, 55),
    new Ciudad("Ayacucho", 17, 45),
    new Ciudad("Chiclayo", 24, 75),
    new Ciudad("Piura", 26, 70),
    new Ciudad("Huancayo", 16, 58),
    new Ciudad("Puno", 10, 60),
    new Ciudad("Tumbes", 28, 85),
    new Ciudad("Tacna", 18, 45),
    new Ciudad("Puerto Maldonado", 27, 82)
];


localStorage.setItem("ciudades", JSON.stringify(ciudades));

const ciudadesGuardadas = JSON.parse(localStorage.getItem("ciudades"));

const gestor = new GestorDeCiudades(ciudadesGuardadas);

// Esta función busca las ciudades y muestra si está o no en la lista 
const buscarCiudad = ciudad => {
    let ciudadEncontrada = gestor.buscarCiudad(ciudad);

    let resultadoDiv = document.getElementById("resultado");

    if (ciudadEncontrada) {
        const { temperatura, humedad } = ciudadEncontrada; // Aquí desestructura para extraer temperatura y humedad
        resultadoDiv.textContent = `Temperatura actual: ${temperatura}°C, Humedad: ${humedad}%`;
    } else {
        resultadoDiv.textContent = `${ciudad} no está en la lista de ciudades.`;
    }
};


document.getElementById("buscar").addEventListener("click", () => {
    let ciudad = document.getElementById("ciudad").value; 
    buscarCiudad(ciudad); 
});


const ciudadesCalientes = gestor.obtenerCiudadesCalientes(20);
let listaCiudades = document.getElementById("ciudadesCalientes");

for (let i = 0; i < ciudadesCalientes.length; i++) {
    let item = document.createElement("li");
    // Alias en desestructuración
    const { nombre: ciudadNombre, temperatura } = ciudadesCalientes[i];
    item.textContent = `${ciudadNombre}: ${temperatura}°C`;
    listaCiudades.appendChild(item);
}
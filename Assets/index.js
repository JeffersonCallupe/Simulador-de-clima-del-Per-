
// Lista de ciudades 
let ciudades = ["Lima", "Cusco", "Arequipa", "Trujillo", "Iquitos", "Cajamarca", "Ayacucho"];


// Haciendo una búsqueda de ciudad mediante el ciclo for y codicionales

let buscarCiudad = "Lima";  // Búsqueda por variable. 
let ciudadNoEncontrada = false;


for(let i=0 ; i < ciudades.length; i++){
    if ( buscarCiudad === ciudades[i]){
        console.log (`${buscarCiudad} está dentro de la lista de ciudades`);
    }else{
        ciudadNoEncontrada = true;
    }
}

if(ciudadNoEncontrada === true){
    console.log (`${buscarCiudad} no está dentro de la lista de ciudades`);
}



// SEGUNDA FORMA A CONSIDERAR

/*
if ( ciudades.includes(buscarCiudad)){
    console.log (`${buscarCiudad} está dentro de la lista de ciudades`);
}else{
    console.log (`${buscarCiudad} no está dentro de la lista de ciudades`);
}
*/




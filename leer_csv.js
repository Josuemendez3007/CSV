const fs = require('fs');
const readlineSync = require('readline-sync');

// Función para leer un archivo CSV
function leerCSV(archivo) {
  // Leer el contenido del archivo CSV
  const data = fs.readFileSync(archivo, 'utf8');
  // Mostrar el contenido del archivo CSV
  console.log('Contenido del archivo CSV:');
  console.log(data);
}

// Función para insertar datos en un archivo CSV
function insertarDatos(archivo, datos) {
  fs.appendFileSync(archivo, `${datos}\n`);
  console.log('Datos insertados correctamente.');
}

// Función para borrar datos de un archivo CSV
function borrarDatos(archivo) {
  fs.writeFileSync(archivo, '');
  console.log('Datos borrados correctamente.');
}

// Función para mostrar el menú
function mostrarMenu() {
  console.log('Menú:');
  console.log('1. Leer en CSV');
  console.log('2. Insertar datos en CSV');
  console.log('3. Borrar datos del CSV');
  console.log('4. Salir');
}

// Función principal
function main() {
  const archivo = 'app.csv';
  
  let opcion = 0;
  while (opcion !== 4) {
    mostrarMenu();
    opcion = parseInt(readlineSync.question('Selecciona una opción: '));

    switch (opcion) {
      case 1:
        leerCSV(archivo);
        break;
      case 2:
        let datosInsertar = readlineSync.question('Ingresa los datos a insertar: ');
        insertarDatos(archivo, datosInsertar);
        break;
      case 3:
        borrarDatos(archivo);
        break;
      case 4:
        console.log('Saliendo...');
        break;
      default:
        console.log('Opción no válida. Por favor, selecciona una opción válida.');
    }
  }
}

// Ejecutar la función principal
main();

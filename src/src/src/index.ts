
import RegistroAutomotor from '../RegistroAutomotor';

const registro = new RegistroAutomotor();

// Cargar vehículos desde un archivo
registro.cargarVehiculosDesdeArchivo('vehiculos.txt');

// Listar vehículos
console.log('Vehículos registrados:');
console.log(registro.listarVehiculos());

// Agregar un nuevo vehículo
registro.agregarVehiculo('ABC123');
console.log('Vehículos actualizados después de agregar uno nuevo:');
console.log(registro.listarVehiculos());

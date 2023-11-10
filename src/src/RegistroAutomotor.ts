
import LectorArchivos from '../LectorArchivos';

class RegistroAutomotor {
    private vehiculos: string[];

    constructor() {
        this.vehiculos = [];
    }

    cargarVehiculosDesdeArchivo(ruta: string): void {
        const contenido = LectorArchivos.leerArchivo(ruta);
        this.vehiculos = contenido.split('\n').map(linea => linea.trim());
    }

    listarVehiculos(): string[] {
        return this.vehiculos;
    }

    agregarVehiculo(vehiculo: string): void {
        this.vehiculos.push(vehiculo);
    }
}

export default RegistroAutomotor;

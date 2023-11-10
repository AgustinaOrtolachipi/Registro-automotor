
import * as fs from 'fs';

class LectorArchivos {
    static leerArchivo(ruta: string): string {
        return fs.readFileSync(ruta, 'utf-8');
    }
}

export default LectorArchivos;

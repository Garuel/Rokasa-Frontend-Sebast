export class Proveedor {
    _id?: string;
    created_at?: string;
    DNI: string;
    nombre: string;
    apellido: string;
    empresa: string;
    descripcion_Empresa: string;


    constructor(id: string, created_at= '', DNI: string, nombre: string, apellido: string, empresa: string, descripcion_Empresa: string) {
        this._id = id
        this.created_at = created_at
        this.DNI= DNI
        this.nombre= nombre
        this.apellido= apellido
        this.empresa = empresa
        this.descripcion_Empresa=descripcion_Empresa
    }
}
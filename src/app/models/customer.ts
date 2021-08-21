export class Customers {
    _id?: string;
    created_at?: string;
    DNI: string;
    nombre: string;
    apellido: string;
    

    constructor(id: string, created_at= '', nombre: '', DNI: string, apellido: string) {
        this._id = id
        this.created_at = created_at
        this.DNI = DNI
        this.nombre = nombre
        this.apellido = apellido
       
    }
}
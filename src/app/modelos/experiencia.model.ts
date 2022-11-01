export class Experiencia{
    id?: number;
    cargo: string;
    anio: string;
    mes: string;
    dia: string;
    actual: boolean;
    descripcion: string;

    
    constructor(cargo: string, anio: string, mes: string, dia: string, actual: boolean, descripcion: string){
            this.cargo = cargo;
            this.anio = anio;
            this.mes = mes;
            this.dia = dia;
            this.actual = actual;
            this.descripcion = descripcion;
    }
}
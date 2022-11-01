import { NumberFormatStyle } from "@angular/common";

export class persona{
    idPersona?: number;
    nombre: string;
    apellido: string;
    dni: string;
    edad: string;
    email: string;
    fechaNac: string;

    constructor(nombre: string, apellido: string, dni: string,
        edad: string, email: string, fechaNac: string){
            this.nombre = nombre;
            this.apellido = apellido;
            this.dni = dni;
            this.edad = edad;
            this.email = email;
            this.fechaNac = fechaNac;
    }
}
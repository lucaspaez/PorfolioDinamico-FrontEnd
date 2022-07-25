import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  obtenerDatos() {
    console.log("Es servicio se esta corriendo de manera correcta...");
  }
}

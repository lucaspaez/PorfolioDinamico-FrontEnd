import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../modelos/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/portfolio';
  URL = 'https://backendportfoliodinamicoargpro.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.httpClient.get<persona>(this.URL+ '/ver/persona/13');
    console.log(this.URL);
  }

  public buscarPesona(id:number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `/ver/persona/${id}`);
  }

  public actualizarPersona(persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + '/actualiza/persona', persona);
  }

}

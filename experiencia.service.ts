import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {


  //URL = 'http://localhost:8080/portfolio';
  URL = 'https://backendportfoliodinamicoargpro.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  public verExperiencias(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.URL+ '/ver/experiencias');
  }
  
  public buscarExperiencia(id:number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.URL + `/ver/experiencia/${id}`);
  }

  public crearExperiencia(experiencia: Experiencia): Observable<any>{
    console.log(experiencia);
    return this.httpClient.post<any>(this.URL + '/nueva/experiencia', experiencia);
  }

  public actualizarExperiencia(experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.URL + '/actualiza/experiencia', experiencia);
  }

  public borrarExperiencia(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/borrar/experiencia/${id}`);
  }


}

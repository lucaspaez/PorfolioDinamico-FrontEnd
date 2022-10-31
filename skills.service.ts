import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../modelos/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  //URL = 'http://localhost:8080/portfolio';
  URL = 'https://backendportfoliodinamicoargpro.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.URL+ '/ver/skills');
  }

  public buscarSkill(id:number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.URL + `/ver/skill/${id}`);
  }

  public crearSkill(skill: Skill): Observable<any>{
    //console.log(skill);
    return this.httpClient.post<any>(this.URL + '/nueva/skill', skill);
  }

  public actualizarSkill(skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.URL + '/actualiza/skill', skill);
  }

  public borrarSkill(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/borrar/skill/${id}`);
  }
}

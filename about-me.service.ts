import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AboutMe } from '../modelos/about-me.model';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  //URL = 'http://localhost:8080/portfolio';
  URL = 'https://backendportfoliodinamicoargpro.herokuapp.com';

  constructor(private httpClient: HttpClient) {}

    public getAboutMe(): Observable<AboutMe>{
      return this.httpClient.get<AboutMe>(this.URL+ '/ver/aboutme/1');
      console.log(this.URL);
    }

    public buscarAboutMe(id:number): Observable<AboutMe>{
      return this.httpClient.get<AboutMe>(this.URL + `/ver/aboutme/${id}`);
    }
  
    public actualizarAboutMe(aboutMe: AboutMe): Observable<any>{
      return this.httpClient.put<any>(this.URL + '/actualiza/aboutme', aboutMe);
    }

  }

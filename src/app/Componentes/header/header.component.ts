import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { persona } from 'src/app/modelos/persona.model';
import { AboutMe } from 'src/app/modelos/about-me.model';
import { AboutMeService } from 'src/app/Servicios/about-me.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  persona: persona = new persona("","","","","","");
  aboutMe: AboutMe = new AboutMe("", "", "","","","","","","","","","","");
  constructor(private datosPortfolio:PortfolioService, public personaService: PersonaService, public aboutMeService: AboutMeService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos();
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    this.aboutMeService.getAboutMe().subscribe(data2 =>{this.aboutMe = data2})
  }

}

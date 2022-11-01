import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/modelos/about-me.model';
import { persona } from 'src/app/modelos/persona.model';
import { AboutMeService } from 'src/app/Servicios/about-me.service';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  persona: persona = new persona("","","","","","");
  aboutMe: AboutMe = new AboutMe("", "", "","","","","","","","","","","");

  constructor(public personaService: PersonaService, public aboutMeService: AboutMeService) { }

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data => {this.persona = data})
    this.aboutMeService.getAboutMe().subscribe(data2 =>{this.aboutMe = data2})

  }

}

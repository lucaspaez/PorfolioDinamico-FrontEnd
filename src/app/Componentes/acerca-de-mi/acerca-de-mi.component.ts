import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/modelos/about-me.model';
import { persona } from 'src/app/modelos/persona.model';
import { AboutMeService } from 'src/app/Servicios/about-me.service';
import { ImageService } from 'src/app/Servicios/image.service';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {

  isLogged = false;

  aboutMe: AboutMe = new AboutMe("", "", "","","","","","","","","","","");
  persona: persona = new persona("","","","","","");

  personaRecuperada: persona = new persona("","","","","","");
  aboutMeRecuperado: AboutMe = new AboutMe("", "", "","","","","","","","","","","");
  
  constructor(public personaService: PersonaService, public aboutMeService: AboutMeService, private tokenService: TokenService, public imageService:ImageService) { }

  ngOnInit(): void {

    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

    this.personaService.getPersona().subscribe(data => {this.persona = data})
    this.aboutMeService.getAboutMe().subscribe(data2 =>{this.aboutMe = data2})

  }

  editarDatosPersonales(id:number){
    //console.log("ID recuperado: " + id);
    
    this.personaService.buscarPesona(id).subscribe(
      data =>{
        this.personaRecuperada = data;

        //console.log("Experiencia recuperada: "+ this.experienciaRecuperada);

      }, err =>{
        alert("¡Falló al editar datos personales!");
        window.location.reload()
      }
    )
  }

  actualizarPersona():void{
    //const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.actualizarPersona(this.personaRecuperada).subscribe(
      data => {
        alert("Datos personales modificados!");
        window.location.reload()
      }, err =>{
        alert("Error al modificar los datos personales...");
        window.location.reload()
      }
    )
    //this.experienciaRecuperada = new Experiencia;
  }

  editarDatosAboutMe(id:number){
    //console.log("ID recuperado: " + id);
    
    this.aboutMeService.buscarAboutMe(id).subscribe(
      data =>{
        this.aboutMeRecuperado = data;

        //console.log("Experiencia recuperada: "+ this.experienciaRecuperada);

      }, err =>{
        alert("¡Falló al aditar datos laborales!");
        window.location.reload()
      }
    )
  }

  actualizarAboutMe():void{
    //const id = this.activatedRoute.snapshot.params['id'];
    this.aboutMeService.actualizarAboutMe(this.aboutMeRecuperado).subscribe(
      data => {
        alert("Datos Laborales modificados!");
        window.location.reload()
      }, err =>{
        alert("Error al modificar los datos laborales...");
        window.location.reload()
      }
    )
    //this.experienciaRecuperada = new Experiencia;
  }

  uploadImagePerfil($event:any){
    const id = 1;
    const name = 'perfil_' + 1;
    //this.imageService.uploadImagePerfil($event, name)
  
  }

  uploadImageHero($event:any){
    const id = 1;
    const name = 'perfil_' + 1;
    //this.imageService.uploadImageHero($event, name)
  }

}

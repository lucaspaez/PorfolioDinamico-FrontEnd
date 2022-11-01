import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/modelos/skills.model';
import { SkillsService } from 'src/app/Servicios/skills.service';
import { TokenService } from 'src/app/Servicios/token.service';

declare let TagCloud: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  isLogged = false;

  skills: Skill[] = [];

  text: string[] = [];

  text1!: string[];

  skillRecuperada: Skill = new Skill("");

  tag: string;

  constructor(public skillsService: SkillsService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {

    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }


    this.skillsService.lista().subscribe(
      data => {
        this.skills = data;
        for (let sk of this.skills) {
          this.text.push(sk.tag);
        }

        //console.log(this.text);
        //console.log(Object.values(this.text));

        this.text1 = Object.values(this.text);
        //console.log(data);
        //console.log(this.text1);

        const TagCloud = require('TagCloud');
        const container = '.tagcloud';

        const Tag_Cloud = TagCloud(container, this.text1, {
          // radius in px
          radius: 170,

          // animation speed
          // slow, normal, fast
          maxSpeed: 'fast',
          initSpeed: 'normal',

          // 0 = top
          // 90 = left
          // 135 = right-bottom
          direction: 135,

          // interact with cursor move on mouse out
          keep: true
        });

      }
    )

  }

  editarSkills(){
    this.skillsService.lista().subscribe(
      data => {
        this.skills = data;
      })
  }

  eliminarSkill(id: number){
    //console.log("ID para eliminar: "+ id);
    this.skillsService.borrarSkill(id).subscribe(
      data => {
        alert("Skill Borrada!");
        window.location.reload()
      }, err =>{
        alert("Error al borrar skill...");
        window.location.reload()
      }
    )
  }

  actualizarSkill(id: number, tag: string){

    this.skillRecuperada.id = id;
    this.skillRecuperada.tag = tag;
    //console.log("ID para actualizar: "+ id);
    // this.skillsService.buscarSkill(id).subscribe(
    //   data =>{
    //     this.skillRecuperada = data;

    //     console.log("Skill recuperada: "+ this.skillRecuperada);
    //     this.skillsService.actualizarSkill(this.skillRecuperada).subscribe(
    //       data => {
    //         alert("Skill modificada!");
    //         window.location.reload()
    //       }, err =>{
    //         alert("¡Falló al actualizar skill..!");
    //         window.location.reload()
    //       }
    //     )


    //   }, err =>{
    //     alert("¡Falló recuperar skill..!");
    //     window.location.reload()
    //   }
    // )

     this.skillsService.actualizarSkill(this.skillRecuperada).subscribe(
       data => {
         alert("Skill modificada!");
         window.location.reload()
       }, err =>{
         alert("¡Falló al actualizar skill..!");
         window.location.reload()
       }
     )

    //this.router.navigate(['']);

  }

  public agregarSkill(): void{
    const sk = new Skill(this.tag);
    this.skillsService.crearSkill(sk).subscribe(
      data=>{
        //this.router.navigate(['recaragaExperiencias']);
        alert("¡Skill agregada!");
        window.location.reload()
      }, err =>{
        //this.router.navigate(['']);
        alert("¡Falló al agregar Skill!");
        window.location.reload()
      }
    );
  }

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/modelos/experiencia.model';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  isLogged = false;

  experiencias: Experiencia[] = [];
  experienciasOrdenadas: Experiencia [] = [];
  
  cargo: string ="";
  anio: string ="";
  mes: string ="";
  dia: string ="";
  actual: boolean = false;
  descripcion: string ="";

  experienciaRecuperada: Experiencia = new Experiencia ('', '', '', '', false, '');

  constructor(public experienciaService: ExperienciaService, private tokenService: TokenService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

    this.experienciaService.verExperiencias().subscribe(data => {
      this.experiencias = data
      this.ordenaExperienciasAnio();
      this.ordenaExperienciasAnio();

      // for (var i of this.experiencias) {
      //   console.log(i);
      // }
      //console.log("id experiencias"+this.experiencias);

    })
    
    //console.log("Experiencia recuperada: "+ this.experienciaRecuperada);
  }

  ordenaExperienciasAnio(){
    
    this.experienciasOrdenadas = this.experiencias.sort(
      function (a, b) {
        if (a.dia > b.dia) {
          return 1;
        }
        if (a.dia < b.dia) {
          return -1;
        }
          return 0;
      })

    this.experienciasOrdenadas = this.experiencias.sort(
      function (a, b) {
        if (a.mes > b.mes) {
          return -1;
        }
        if (a.mes < b.mes) {
          return 1;
        }
          return 0;
      })

      

    this.experienciasOrdenadas = this.experiencias.sort(
      function (a, b) {
        if (a.anio > b.anio) {
          return -1;
        }
        if (a.anio < b.anio) {
          return 1;
        }
          return 0;
      })
    //console.log(this.experienciasOrdenadas);
  }

  public agregarExperiencia(): void{
    const expe = new Experiencia(this.cargo, this.anio, this.mes, this.dia, this.actual, this.descripcion);
    this.experienciaService.crearExperiencia(expe).subscribe(
      data=>{
        //this.router.navigate(['recaragaExperiencias']);
        alert("¡Experiencia Laboral agregada!");
        window.location.reload()
      }, err =>{
        //this.router.navigate(['']);
        alert("¡Falló al agregar Experiencia Laboral!");
        window.location.reload()
      }
    );
  }

  public editarExperiencia(id:number){
    //console.log("ID recuperado: " + id);
    
    this.experienciaService.buscarExperiencia(id).subscribe(
      data =>{
        this.experienciaRecuperada = data;

        //console.log("Experiencia recuperada: "+ this.experienciaRecuperada);

      }, err =>{
        alert("¡Falló al agregar Experiencia Laboral!");
        window.location.reload()
      }
    )

  }

  actualizarExperiencia():void{
    //const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.actualizarExperiencia(this.experienciaRecuperada).subscribe(
      data => {
        alert("Experiencia Laboral modificada!");
        window.location.reload()
      }, err =>{
        alert("Error al modificar la experiencia...");
        window.location.reload()
      }
    )
    //this.experienciaRecuperada = new Experiencia;
  }

  public borrarExperiencia(id:number): void{
    //const id: number = this.activatedRoute.snapshot.params['id'];
    //console.log("recupera "+id);
    this.experienciaService.borrarExperiencia(id).subscribe(
      data => {
        alert("Experiencia Laboral Borrada!");
        window.location.reload()
      }, err =>{
        alert("Error al borrar la experiencia...");
        window.location.reload()
      }
    )
    
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';



import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { AcercaDeMiComponent } from './Componentes/acerca-de-mi/acerca-de-mi.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { PortafolioComponent } from './Componentes/portafolio/portafolio.component';
import { ContactameComponent } from './Componentes/contactame/contactame.component';
import { FooterComponent } from './Componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AcercaDeMiComponent,
    SkillsComponent,
    ExperienciaComponent,
    PortafolioComponent,
    ContactameComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

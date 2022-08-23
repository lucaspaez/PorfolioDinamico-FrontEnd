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
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    FooterComponent,
    LoginComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

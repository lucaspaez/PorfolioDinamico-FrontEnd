import { EnvironmentInjector, NgModule } from '@angular/core';
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
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './Servicios/intercesptor-service';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/compat/auth-guard';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import {
  initializeAuth,
  provideAuth,
  browserPopupRedirectResolver,
  indexedDBLocalPersistence,
  connectAuthEmulator,
  getAuth,
} from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


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
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    provideAuth(() => getAuth()),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

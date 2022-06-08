import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { HabilidadesWebComponent } from './componentes/habilidades-web/habilidades-web.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NombreComponent } from './componentes/nombre/nombre.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    EstudiosComponent,
    HabilidadesWebComponent,
    ContactoComponent,
    FooterComponent,
    IniciarSesionComponent,
    PorfolioComponent,
    NombreComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

  schemas: [
  CUSTOM_ELEMENTS_SCHEMA,
 ],

})
export class AppModule { }

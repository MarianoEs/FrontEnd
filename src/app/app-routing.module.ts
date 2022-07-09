import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from "./componentes/iniciar-sesion/IniciarSesionComponent";
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';

const routes: Routes = [
  {path: 'porfolio', component: PorfolioComponent },
  {path: 'iniciarsesion', component: IniciarSesionComponent},
  {path: '', redirectTo: '/porfolio', pathMatch:'full' },
  { path: '**', redirectTo: '/porfolio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
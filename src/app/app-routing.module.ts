import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { EditComponent } from './edit/edit.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"proyectos",component:ProyectosComponent},
  {path:"quienes",component:QuienesComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"suscribirse",component:SubscribeComponent},
  {path:"editarUsuario/:id",component:EditComponent},
  {path:"mostrarUsuarios",component:UsersComponent},
  {path:"login",component:LoginComponent},
  {path:"**", component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

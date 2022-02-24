import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { UsersComponent } from './users/users.component';
import { ServiceService } from './service.service';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ResponderComponent } from './responder/responder.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './LoginService';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesComponent,
    ContactoComponent,
    ErrorPageComponent,
    SubscribeComponent,
    EditComponent,
    UsersComponent,
    ResponderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [ServiceService,LoginService,CookieService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }

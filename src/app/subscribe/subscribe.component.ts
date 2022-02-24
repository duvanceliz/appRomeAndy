import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Modelo/User';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor(private userService:ServiceService,private router:Router) { }

  user = new User;
  nombre:string ="";
  apellido:string ="";
  email:string ="";
  exito:string ="";
  error:string = "";  

  ngOnInit(): void {
  }

  saveUser():void{
    if((this.nombre && this.apellido) != ""){

      this.user.nombre = this.nombre;
    this.user.apellido = this.apellido;
    this.user.email = this.email;
    this.userService.userSave(this.user).subscribe(data =>{
      this.exito = "Usted se ha suscrito para tener información de primera mano, Muchas gracias"
    });

    }else{
      this.error = "Todos los campos deben estar completados"
    }
    
    
    
  }

}

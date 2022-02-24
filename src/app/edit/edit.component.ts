import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Modelo/User';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private userService:ServiceService, private route:ActivatedRoute) {
  }

  user:User = new User;
  id:number = 0;
  nombre:String ="";
  apellido:String ="";
  email:String ="";
  exito:string = "";

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(data => {
    this.user = data;
    this.nombre = this.user.nombre;
    this.apellido = this.user.apellido;
    this.email = this.user.email;
    });
    
  }

  actulizarUsuario():void{

    this.user.id = this.id;
    this.user.nombre = this.nombre;
    this.user.apellido = this.apellido;
    this.user.email = this.email;
    this.userService.userPut(this.user).subscribe(data => {
      this.exito= "El usuario se ha actualizado";
    });
    
  
  }

}

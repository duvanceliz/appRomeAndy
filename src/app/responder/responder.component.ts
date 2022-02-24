import { Component, Input, OnInit} from '@angular/core';
import { empty } from 'rxjs';
import { LoginService } from '../LoginService';
import { Comentario } from '../Modelo/Comentario';
import { Reply } from '../Modelo/Reply';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-responder',
  templateUrl: './responder.component.html',
  styleUrls: ['./responder.component.css']
})
export class ResponderComponent implements OnInit {

  @Input() item:Comentario= new Comentario; // decorate the property with @Input()
 
  constructor(private service:ServiceService, private loginService:LoginService) { }
  

  nombre:string = "";
  comentario:string = "";
  fecha:Date = new Date();
  reply:Reply = new Reply();
  exito:string ="";
  error:string ="";
  disabled:boolean = true;

  ngOnInit(): void {

    if(this.loginService.getToken()!=""){

      this.nombre = "Moderador";

    }

  }

  publicar(coment:Comentario){

    if((this.nombre && this.comentario) != ""){
    this.reply.nombre = this.nombre;
    this.reply.comentario = this.comentario;
    this.service.setReply(this.reply,coment.id).subscribe(data => {
    this.exito = "Su mensaje ha sido publicado";
      coment.reply.push(this.reply);
    })

    }else{

      this.error = "Todos los campos deben estar completados"

    }
  }
  keyupCall(){

    if(this.nombre.length > 2){
      this.disabled = false;
    }else{
      this.disabled = true;
    }
  }

}

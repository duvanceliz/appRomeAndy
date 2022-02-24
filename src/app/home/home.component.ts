
import { Component, OnInit } from '@angular/core';
import { Comentario } from '../Modelo/Comentario';

import { ServiceService } from '../service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ServiceService) { 


  }


  comentarios:Comentario[]=[];

  coment:Comentario = new Comentario;

  currentItem:Comentario = new Comentario;

  nombre:string = "";
  comentario:string = "";
  fecha:Date = new Date();
  exito:string ="";
  disabled:boolean = true;
  error:string = "";

    


  ngOnInit(): void {
     
    this.service.getComent().subscribe(data =>{
      this.comentarios = data;
      this.comentarios.sort((a, b)=>b.meGustas - a.meGustas)
    })
    
    
  }

  enviarComentario(){
    
    
    if((this.nombre && this.comentario) != ""){
  
    this.coment.nombre = this.nombre;
    this.coment.comentario = this.comentario;
    this.coment.fecha = this.fecha.toLocaleString()

    this.service.setComent(this.coment).subscribe(data =>{
      this.exito = "Gracias por comentar";
      this.comentarios.push(this.coment);
    })

    }else{

      this.error = "Todos los campos deben estar llenos";
    }
   

   

  }

  incrementar(coment:Comentario){
    /*coment.meGustas +=1; 
    this.service.putComent(coment).subscribe(data=>{
    })*/
  }
  responder(coment:Comentario){

    this.currentItem = coment;

  }
  
  keyupCall(){

    if(this.nombre.length > 2){
      this.disabled = false;
    }else{
      this.disabled = true;
    }
  }


}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../LoginService';
import { User } from '../Modelo/User';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service:ServiceService,private router:Router,private logservice:LoginService) { }
  users:User[]=[];
  
 
  ngOnInit(): void {
      
      if(this.logservice.getToken()){
        
        this.service.getUserList(this.logservice.getToken()).subscribe(data=>{
          this.users=data;
        },error =>{
          console.log(error);
        })

      }else{
        this.router.navigate(["login"])
      }
       

  }
  editarUsuario(id:number){

    this.router.navigate(["editarUsuario",id])

  }
  borrarUsuario(user:User){
     let resultado = window.confirm('Estas seguro?')
    if(resultado == true){

    this.service.userDelete(user).subscribe(data => {
      this.users = this.users.filter(p=>p!==user);
    
    });
    this.router.navigate(["mostrarUsuarios"])

    return true;

    }else{
      return false;
    }
    
  }
  
  
  logout(){
    this.logservice.deleteCookies();
    this.router.navigateByUrl('/login')
  }

}

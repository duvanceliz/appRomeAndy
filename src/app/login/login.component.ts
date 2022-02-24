import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { LoginService } from '../LoginService';
import { Usuario } from '../Modelo/Usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService,private router:Router) { }

  username:string="";
  password:string="";
  error:string = "";
  loading:Boolean = false;


  ngOnInit(): void {

    if(this.loginservice.getToken()){
      this.router.navigateByUrl('/mostrarUsuarios')
    }

  }

  entrar(){
    
    this.loading = true;
    const user = {username:this.username,password:this.password}
    this.loginservice.login(user).subscribe(data =>{
     this.loginservice.setToken(data.body.dataToken);
     this.router.navigateByUrl('/mostrarUsuarios')
     this.loading = false;
     
    }, error =>{this.error = error.message;
      this.loading = false;
    });
    

  }

}

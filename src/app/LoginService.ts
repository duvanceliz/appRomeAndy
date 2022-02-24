
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from './Modelo/Usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService{

    constructor(private http: HttpClient, private cookies:CookieService){}


    Url:string = "http://18.231.186.191:8080/login";

    login(user:any): Observable<any>{
        return this.http.post<any>(this.Url,user,{ observe: 'response' });
    }
    

    setToken(token:string){

      this.cookies.set("token",token);

    }

    getToken(){
      return this.cookies.get("token");
    }

    deleteCookies(){
      this.cookies.delete("token");
    }

}
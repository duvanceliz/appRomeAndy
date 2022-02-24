import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './Modelo/User';
import { Comentario } from './Modelo/Comentario';
import { Reply } from './Modelo/Reply';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) {
  
   }

  
  users:User[]=[];
  

  Url = 'http://18.231.186.191:8080/app/user';
  Url2 = 'http://18.231.186.191:8080/app/coment';

  getUserList(token:string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer'+token
    })
    return this.http.get<User[]>(this.Url,{headers});
  }

  getUser(id:number){ 
    return this.http.get<User>(this.Url+"/"+id);
  }

  userDelete(user:User){
  
    return this.http.delete<User>(this.Url+"/"+user.id);

  }

  userSave(user:User){
    return this.http.post<User>(this.Url,user);
  }

  userPut(user:User){
    return this.http.put<User>(this.Url,user);
  }

  setComent(coment:Comentario){
    return this.http.post<Comentario>(this.Url2,coment);
  }

  getComent(){

    return this.http.get<Comentario[]>(this.Url2);

  }

  putComent(coment:Comentario){

    return this.http.put<Comentario>(this.Url2+"/like",coment);

  }

  setReply(reply:Reply,id:number){

    return this.http.post<Reply>(this.Url2+"/reply/"+id,reply);

  }

}

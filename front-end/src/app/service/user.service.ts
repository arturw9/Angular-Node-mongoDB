import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  postUser(data:any)
    {
      return this._http.post<any>("http://localhost:3000/add_user/",data).pipe(map((res:any)=> {
       return res
      }))
    }


  getUser()
    {
      return this._http.get<any>("http://localhost:3000/users/").pipe(map((res:any)=> {
        return res
      }))
    }

  getUserOne(data:any, _id:number)
    {
      return this._http.get<any>("http://localhost:3000/users/"+ _id,data).pipe(map((res:any)=> {
        return res
      }))
    }


  putUser(data:any, _id:number)
    {
      return this._http.put<any>("http://localhost:3000/edit_user/" + _id,data).pipe(map((res:any)=> {
        return res
      }))
    }


  deleteTrator(_id:number)
    {
      return this._http.delete<any>("http://localhost:3000/delete_user/" + _id).pipe(map((res:any)=> {
        return res
    } ))
    }

}

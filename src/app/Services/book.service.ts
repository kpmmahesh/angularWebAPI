import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  myBooks :any[]=[];
  constructor(private _http:HttpClient) {
  
   }
   savBook(Books:any[]):Observable<any>{
    console.log(Books);
    return this._http.post("https://apitestproj-1f007-default-rtdb.firebaseio.com/data.json",Books)
   }
   getBook():Observable<any>{
    return this._http.get("https://apitestproj-1f007-default-rtdb.firebaseio.com/data.json");
   }
   
   getBook1():Observable<any>{
    return this._http.get("https://localhost:7221/api/Book");
   }

   savBook1(myBooks: any):Observable<any>{
    console.log(myBooks);
   return this._http.post("https://localhost:7221/api/Book/create",myBooks);
    
   }

}

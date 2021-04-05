import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';	
import {cardHs}	from '../interface/card-hs.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
   }
   
   getInfo(playerClass:string) {
    let headers = new HttpHeaders().append("x-rapidapi-key", "eb38ca5bd9msh4950b7f7597ffbep17c9cdjsn48403645905c").append("x-rapidapi-host", "omgvamp-hearthstone-v1.p.rapidapi.com").append("useQueryString","true")
   	return this.http.get<Array<cardHs>>("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/" + playerClass + "?collectible=1",{headers}).toPromise();
   }
   
   
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';		

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
   }
   
   getInfo() {
   	let headers = new HttpHeaders();
   	headers.append("x-rapidapi-key", "eb38ca5bd9msh4950b7f7597ffbep17c9cdjsn48403645905c");
   	headers.append("x-rapidapi-host", "omgvamp-hearthstone-v1.p.rapidapi.com")
   	headers.append("useQueryString", "true")
   	return this.http.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks",{headers}).toPromise();
   }
   
   
}

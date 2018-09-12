import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const urlServer = 'api/';
@Injectable({
  providedIn: 'root'
})

export class PersonsService {
  headers = new HttpHeaders().set('Authorization', 'Bearer 9-zEcV7rhbzK4PqLY8QdLw');

  constructor(private http: HttpClient) {
  }


  getPersons() {
    return this.http.get(urlServer + 'persons', {'headers': this.headers});
  }
}

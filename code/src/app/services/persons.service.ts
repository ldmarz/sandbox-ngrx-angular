import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVER } from '../constants';
import { PersonsInterface } from '../interfaces/persons';

@Injectable({
  providedIn: 'root'
})

export class PersonsService {
  constructor(private http: HttpClient) {
  }


  getPersons() {
    return this.http.get(URL_SERVER + 'persons');
  }

  savePersons(people: PersonsInterface) {
    return this.http.post(URL_SERVER + 'persons', people);
  }

  activatePerson(id: PersonsInterface['id']) {
    return this.http.post(URL_SERVER + `persons/${id}/deactivate`, {});
  }

  enablePerson(id: PersonsInterface['id']) {
    return this.http.post(URL_SERVER + `persons/${id}/activate`, {});
  }

  getPersonById(id: PersonsInterface['id']) {
    return this.http.get(URL_SERVER + `persons/${id}`, {});
  }

  deletePerson(id: PersonsInterface['id']) {
    return this.http.delete(URL_SERVER + `persons/${id}`, {});
  }

  updatePeople(id: PersonsInterface['id'], people: PersonsInterface) {
    return this.http.put(URL_SERVER + `persons/${id}`, people);
  }
}

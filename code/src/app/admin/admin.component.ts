import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { PersonsInterface } from '../interfaces/persons';
import { AlertsService } from '../services/alerts.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public persons: any;

  constructor(private personsService: PersonsService, private alertService: AlertsService) {
    this.searchPeople();
  }

  togglePerson(person: PersonsInterface) {
    if (person.enabled) {
      this.desactivatePeople(person);
    } else {
      this.enablePerson(person);
    }
  }

  desactivatePeople(person: PersonsInterface) {
    this.personsService.activatePerson(person.id)
      .subscribe(result => {
        person.enabled = false;
      }, this.handleError.bind(this));
  }

  enablePerson(person: PersonsInterface) {
    this.personsService.enablePerson(person.id)
      .subscribe(result => {
        person.enabled = true;
      }, this.handleError.bind(this));
  }

  deletePerson(person: PersonsInterface) {
    this.personsService.deletePerson(person.id)
      .subscribe(result => {
        this.searchPeople();
      }, this.handleError.bind(this));
  }

  searchPeople() {
    this.personsService.getPersons()
      .subscribe((persons: PersonsInterface) => {
        this.persons = persons;
      });
  }

  handleError(response) {
    if (response.error && response.error.error) {
      this.alertService.sendMessage(response.error.reason, 'alert-danger');
    }
  }

  ngOnInit() {
  }

}

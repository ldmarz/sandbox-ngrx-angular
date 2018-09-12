import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { PersonsInterface } from '../interfaces/persons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public persons: any;

  constructor(private personsService: PersonsService) {
    this.personsService.getPersons()
      .subscribe((persons: PersonsInterface) => {
        this.persons = persons;
      });
  }

  ngOnInit() {
  }

}

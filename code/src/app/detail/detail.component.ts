import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { ActivatedRoute } from '@angular/router';
import { PersonsInterface } from '../interfaces/persons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public person: PersonsInterface;

  constructor(private personsService: PersonsService, private activeRoute: ActivatedRoute) {
    const routeParams = this.activeRoute.snapshot.params;
    this.personsService.getPersonById(routeParams.id)
      .subscribe((person: PersonsInterface) => {
        this.person = person;
      });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from '../services/alerts.service';
import { PersonsService } from '../services/persons.service';
import { PersonsInterface } from '../interfaces/persons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-people',
  templateUrl: './form-people.component.html',
  styleUrls: ['./form-people.component.css']
})
export class FormPeopleComponent implements OnInit {
  formPeople: FormGroup;
  formSubmited = false;
  formWithErrors = false;
  isUpdating = false;
  person: PersonsInterface;

  constructor(private formBuilder: FormBuilder, private alertService: AlertsService,
    private personsService: PersonsService, private router: Router, private activeRoute: ActivatedRoute) {
    const routeParams = this.activeRoute.snapshot.params;
    this.formPeople = this.formBuilder.group({
      gender: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required]
    });

    if (routeParams.id) {
      this.isUpdating = true;
      this.getPeople(routeParams.id);
    }
  }

  ngOnInit() {
  }

  get formControl() { return this.formPeople.controls; }


  save() {
    this.formSubmited = true;
    if (this.formPeople.invalid) {
      return;
    }

    const personsForm = this.prepareForm();
    if (this.isUpdating) {
      this.updatePeople(personsForm);
    } else {
      this.savePeople(personsForm);
    }
  }

  updatePeople(personsForm) {
    this.personsService.updatePeople(this.person.id, personsForm)
      .subscribe(
        user => {
          this.alertService.sendMessage('Person updated correctly', 'alert-success');
          this.router.navigate(['index']);
        },
        this.handleError.bind(this)
      );
  }

  savePeople(personsForm) {
    this.personsService.savePersons(personsForm)
      .subscribe(
        user => {
          this.alertService.sendMessage('Person save correctly', 'alert-success');
          this.router.navigate(['index']);
        },
        this.handleError.bind(this)
      );
  }

  prepareForm(): PersonsInterface {
    return {
      gender: this.formControl.gender.value,
      enabled: true,
      first_name: this.formControl.firstName.value,
      last_name: this.formControl.lastName.value,
      email: this.formControl.email.value,
      address: this.formControl.address.value
    };
  }

  handleError(response) {
    if (response.error && response.error.error) {
      this.alertService.sendMessage(response.error.reason, 'alert-danger');
    }
    this.formWithErrors = true;
  }

  setGender(gender) {
    this.formControl.gender.patchValue(gender);
  }

  getPeople(id: PersonsInterface['id']) {
    this.personsService.getPersonById(id)
      .subscribe((person: PersonsInterface) => {
        this.person = person;
        this.setPersonForUpdate(person);
      });
  }

  setPersonForUpdate(person: PersonsInterface) {
    this.formControl.firstName.patchValue(person.first_name);
    this.formControl.lastName.patchValue(person.last_name);
    this.formControl.email.patchValue(person.email);
    this.formControl.gender.patchValue(person.gender);
    this.formControl.address.patchValue(person.address);
  }

}

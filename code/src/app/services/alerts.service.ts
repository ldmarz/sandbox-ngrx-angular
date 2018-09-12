import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private subject = new Subject<any>();
  constructor() {}

  sendMessage(message: string | ValidationErrors, errorClass: string = 'alert-success') {
    this.subject.next({ text: message, errorClass });
    setTimeout(() => {
      this.clearMessage();
    }, 3000);
  }

  clearMessage() {
    this.subject.next({});
  }

  getMessage(): Observable<any> {
    return this.subject;
  }
}

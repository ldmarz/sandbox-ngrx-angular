import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../services/alerts.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alertMsg: string;
  alertClass: string;

  constructor(private alertService: AlertsService) {
    this.alertService.getMessage().subscribe(msg => {
      this.alertMsg = msg.text;
      this.alertClass = msg.errorClass;
    });
  }

  ngOnInit() {
  }

}

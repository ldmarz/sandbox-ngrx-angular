import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmited = false;
  formWithErrors = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authService.clearStorage();
  }

  ngOnInit() {
  }

  login() {
    this.formSubmited = true;
    if (this.loginForm.invalid) {
      return;
    }

    const formData = {
      username: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    };

    this.authService.login(formData, )
      .subscribe(
        user => {
          console.log(user);
          this.router.navigate(['index']);
        },
        error => {
          console.error(error);
          this.formWithErrors = true;
        }
      );
  }
}

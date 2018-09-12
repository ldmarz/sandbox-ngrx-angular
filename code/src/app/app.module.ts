import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonsService } from './services/persons.service';
import { AuthService } from './services/auth.service';
import { AlertsService } from './services/alerts.service';
import { AuthGuard } from './_guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { routing } from './routes';
import { JwtInterceptor } from './interceptor/jwtInterceptor';
import { FormPeopleComponent } from './form-people/form-people.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    FormPeopleComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    AlertsService,
    PersonsService,
    AuthService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

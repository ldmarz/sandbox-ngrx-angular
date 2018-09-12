import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormPeopleComponent } from './form-people/form-people.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'form-people', component: FormPeopleComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);

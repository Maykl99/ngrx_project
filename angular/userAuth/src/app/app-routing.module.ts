import { FlatsEditComponent } from './flats-edit/flats-edit.component';
import { FlatsViewComponent } from './flats-view/flats-view.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FlatsComponent } from './flats/flats.component';
import { AuthGuard } from './guards/auth.guard';
import { FlatsCreateComponent } from './flats-create/flats-create.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'flats', component: FlatsComponent, canActivate: [AuthGuard] },
  { path: 'flats/create', component: FlatsCreateComponent, canActivate: [AuthGuard] },
  { path: 'flats/:flatId', component: FlatsViewComponent, canActivate: [AuthGuard] },
  { path: 'flats/:flatId/edit', component: FlatsEditComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/flats', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

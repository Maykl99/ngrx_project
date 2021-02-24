import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlatsComponent } from './flats/flats.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LogoutComponent } from './logout/logout.component';
import { FlatsCreateComponent } from './flats-create/flats-create.component';
import { FormFlatsComponent } from './form-flats/form-flats.component';
import { FlatsViewComponent } from './flats-view/flats-view.component';
import { FlatsEditComponent } from './flats-edit/flats-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
/* import { MapComponent } from './map/map.component'; */


@NgModule({
  declarations: [
    AppComponent,
    FlatsComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    FlatsCreateComponent,
    FormFlatsComponent,
    FlatsViewComponent,
    FlatsEditComponent,
    NavbarComponent,
    //MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

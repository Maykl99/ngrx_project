import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthInterceptorService } from '../services/auth-interceptor.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [``]
})
export class LoginComponent implements OnInit {

  credentials: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.credentials = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login()
  {
    this.userService.login(this.credentials.value).subscribe(res => {
      localStorage.setItem("token", res.token);

      if (res) {
        this.router.navigate(['flats']);
      }
    })
  }

}

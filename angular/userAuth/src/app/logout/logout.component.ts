import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthInterceptorService } from '../services/auth-interceptor.service';

@Component({
  selector: 'app-logout',
  template: ``,
  styles: [``]
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private httpClient: HttpClient
  ) {}

  logout()
  {
    this.userService.logout().subscribe(res => {
      localStorage.clear()

      if (res) {
        this.router.navigate(['login']);
      }
    })
  }

  ngOnInit(): void {
    return this.logout();
  }

}

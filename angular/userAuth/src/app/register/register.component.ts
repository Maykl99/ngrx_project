import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [``]
})
export class RegisterComponent implements OnInit {

  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.credentials = this.fb.group({

      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]

  })
  }

  register()
  {
    this.userService.register(this.credentials.value)
      .subscribe(
        res => {
          console.log(res);
          if (res) {
            this.router.navigate(['login']);
          }
        }
    )


  }

}

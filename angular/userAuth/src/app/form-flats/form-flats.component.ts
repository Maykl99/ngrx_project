import { FormGroup, Validators, FormControl, CheckboxRequiredValidator, RequiredValidator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-flats',
  templateUrl: './form-flats.component.html',
  styleUrls: ['./form-flats.component.css']
})
export class FormFlatsComponent implements OnInit {

  constructor() { }

  /* signup = new FormGroup({
    email: new FormControl(null, Validators.required),
    image: new FormControl(null, [Validators.required, requiredFileType('png')])
  }); */

  ngOnInit(): void {
  }

}

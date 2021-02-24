import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flat } from './../classes/Flat';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  filter: FormControl;
  filter$:Observable<any>;
  reactiveNavbar: FormGroup;

  @Output() searchEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

    this.reactiveNavbar = new FormGroup({
      filter: new FormControl()
    });

    this.reactiveNavbar.get("filter").valueChanges.pipe(startWith('')).subscribe(
      res => {
        this.filter$ = res;
        this.searchEvent.emit(this.filter$);
      }
    );
  }

}

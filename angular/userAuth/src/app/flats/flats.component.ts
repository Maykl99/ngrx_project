import { Router } from '@angular/router';
import { NavbarComponent } from './../navbar/navbar.component';
import { combineLatest, Subject, Observable } from 'rxjs';
import { FlatResponse } from './../interfaces/FlatResponse';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { UserService } from './../services/user.service';
import { FlatserviceService } from './../services/flatservice.service';
import { Flat } from './../classes/Flat';
import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { BehaviorSubject, from, fromEvent, Subscription } from 'rxjs';
import { catchError, concatMap, filter, map, startWith, tap } from 'rxjs/operators';
import { nextTick } from 'process';


@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styles: [``]
})

export class FlatsComponent implements OnInit{
  create: boolean = true;
  hidden: boolean = true;
  title = 'flats';
  flats$: Observable<Flat[]>;


  filter$: Observable<String>; // filtro navbar
  filteredStates$: Observable<Flat[]>; // variabile contenente appartamenti
  childValue: BehaviorSubject<any> = new BehaviorSubject({}); //Subject<any>= new Subject<any>();


  // filtri form
  reactiveForm: FormGroup;
  filterwc$: Observable<number>;
  filterbed$: Observable<number>;
  filterroom$: Observable<number>;
  filtermq$: Observable<number>;



  @Output() updateFlat = new EventEmitter<Flat>();

  constructor(private http: HttpClient, private service: FlatserviceService, private userService: UserService,private router:Router) {}


  ngOnInit() {

    this.reactiveForm = new FormGroup({
      wc: new FormControl(),
      bed: new FormControl(),
      room: new FormControl(),
      mq: new FormControl()
    });

    // valori da passare al combineLatest
    this.flats$ = this.service.getFlats();
    this.filter$ = this.childValue;

    this.filterwc$ = this.reactiveForm.get('wc').valueChanges.pipe(startWith(''));
    this.filterbed$ = this.reactiveForm.get('bed').valueChanges.pipe(startWith(''));
    this.filterroom$ = this.reactiveForm.get('room').valueChanges.pipe(startWith(''));
    this.filtermq$ = this.reactiveForm.get('mq').valueChanges.pipe(startWith(''));

    this.filteredStates$ = combineLatest([this.flats$, this.filter$, this.filterwc$, this.filterbed$, this.filterroom$, this.filtermq$]).pipe(
      map(([flats, filterString, wc, bed, room, mq]) => Object.values(flats).filter(flat =>
        flat.title.toLowerCase().indexOf(filterString.toLowerCase()) !== -1 &&
        flat.wc >= wc &&
        flat.bed >= bed &&
        flat.room >= room &&
        flat.mq >= mq
      ))
    )
  } // chiusura ngOnit

  filterForm()
  {
    this.hidden = !this.hidden
  }

// trasferito nella view
/*   deleteFlat(id) {
    this.service.deleteFlat(id).subscribe( () => {
      this.flats$.pipe(filter((flat: Flat['id']) => flat.id !== id));
      this.create = !this.create;
      setTimeout(() => {
        this.create = !this.create;
      }, 3000);
    })
  } */
} // chiusura classe

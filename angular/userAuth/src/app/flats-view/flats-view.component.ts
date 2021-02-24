import { FlatInterface } from './../interfaces/Flat';
import { Flat } from './../classes/Flat';
import { FlatserviceService } from './../services/flatservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-flats-view',
  templateUrl: './flats-view.component.html',
  styleUrls: ['./flats-view.component.css']
})
export class FlatsViewComponent implements OnInit{
  create: boolean = true;
  public id: number;
  public flat: Flat;

  constructor(
    public flatService: FlatserviceService,
    private route: ActivatedRoute,
    private router: Router
   ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['flatId'];

    this.flatService.find(this.id).subscribe((data: Flat) => {
      this.flat = data['data'];
      console.log(this.flat);
    });
  };

  deleteFlat(id) {
    this.flatService.deleteFlat(id).subscribe(() => {
      this.create = !this.create;
      setTimeout(() => {
        this.router.navigate(['flats']);
      }, 1000);
    })
  }




}

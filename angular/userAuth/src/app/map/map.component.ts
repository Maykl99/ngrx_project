/* import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { map, catchError } from 'rxjs/operators';
import * as tt from '@tomtom-international/web-sdk-maps';
//import { GeoJSON } from '@types/geojson/index';
//import * as GeoJSON from 'geojson/index';
//esModuleInterop
import { GeoJSON } from 'geojson/index';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  encapsulation: ViewEncapsulation.None
  constructor() { }

  ngOnInit(): void {
    const map = tt.map({
      key: '13f35e1233e3a7aedf08241d21430869',
      container: 'map',
      style: 'tomtom://vector/1/basic-main'
    });
    map.addControl(new tt.NavigationControl());
  }

} */

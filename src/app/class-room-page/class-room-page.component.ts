import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-class-room-page',
  templateUrl: './class-room-page.component.html',
  styleUrls: ['./class-room-page.component.css']
})

export class ClassRoomPageComponent implements OnInit {

  public Bannertitle = {
    title: '',
    description: '',
  }

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;

  constructor( private rutaActiva: ActivatedRoute,) { }

  ngOnInit(): void {
    this.DataURI()
  }

  DataURI(): any {
    let ok = this.rutaActiva.snapshot.params
    let e = JSON.parse(atob(ok.id))
    this.Bannertitle.title = e.name
    this.Bannertitle.description = e.description
    return e
  }

}

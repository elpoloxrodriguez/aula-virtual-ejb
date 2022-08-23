import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService, IAPICore } from '@core/services/apicore/api.service';

export interface UserData {
  grado: string;
  alumno: string;
  cedula: string;
  fecha: string;
}

@Component({
  selector: 'app-list-certificates',
  templateUrl: './list-certificates.component.html',
  styleUrls: ['./list-certificates.component.css']
})

export class ListCertificatesComponent implements AfterViewInit {

  public xAPI: IAPICore = {
    funcion: '',
    parametros: '',
    valores : ''
  }
  
  public users = []

  displayedColumns: string[] = ['grado','alumno', 'cedula', 'fecha'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private apiService: ApiService,
  ) {
   
  }

   ngAfterViewInit() {
  }
  
  async ngOnInit() {
    await this.ListCertificates()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

async ListCertificates() {
  this.xAPI.funcion = 'AULAVIRTUAL_R_Certificates'
  this.xAPI.parametros = ''
  this.xAPI.valores = ''    
  await this.apiService.Ejecutar(this.xAPI).subscribe(
    (data) => {
      data.Cuerpo.map(e => {
        e.grado = e.abbreviation;
        e.alumno = e.firstname + ' ' + e.secondname + ' ' + e.firstsurname + ' ' + e.secondsurname;
        e.cedula = e.cardidentity;
        e.fecha = e.generationdate
        this.users.push(e)
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    },
    (error) => {
      console.log(error)
    }
  )
}

}

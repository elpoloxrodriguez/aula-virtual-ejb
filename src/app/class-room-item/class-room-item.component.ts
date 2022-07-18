import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { iClassRoomItem } from 'app/interfaces/class-room/class-room';
import { ClassroomService } from 'app/services/classroom.service';
import { PageEvent } from '@angular/material/paginator';
import { ApiService, IAPICore } from '../services/apicore/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-class-room-item',
  templateUrl: './class-room-item.component.html',
  styleUrls: ['./class-room-item.component.css']
})
export class ClassRoomItemComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private rutaActiva: ActivatedRoute,
    private classroomsSrv: ClassroomService,
  ) { }

  public xAPI: IAPICore = {
    funcion: '',
    parametros: '',
    valores: ''
  }
  public name: string = ''
  public title: string = ''
  ListClassRoomItem!: iClassRoomItem[]
  SearchClassRoomItem!: iClassRoomItem[]
  public buscar = ''
  longitud = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;


  async ngOnInit() {
    await this.ClassRoomItemList()
  }

  DataURI(): any {
    let ok = this.rutaActiva.snapshot.params
    let e = JSON.parse(atob(ok.id))
    this.name = e.name
    this.title = e.title
    return e
  }

  alertWithSuccess(item) {
    Swal.fire('Thank you...', item.name, 'success');
  }

  r(item): string {
    return btoa(JSON.stringify(item))
  }

  async ClassRoomItemList() {
    const item = this.DataURI()
    this.xAPI.funcion = 'AU_ClassRoomItems'
    this.xAPI.parametros = item.id
    this.xAPI.valores = ''
    this.apiService.Ejecutar(this.xAPI)
    this.classroomsSrv.ListClassRoomItem()
    await this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        const res = data.Cuerpo
        this.ListClassRoomItem = res.filter(e => { return e.idClassRoom == item.id })
        this.SearchClassRoomItem = this.ListClassRoomItem
        this.longitud = this.ListClassRoomItem.length
      },
      (error) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'error',
          title: 'Opps algo salio mal!',
          text: 'Revise la conexion del Middleware Code-Epic'
        })
      }
    )

  }

  //convertir cadena a minuscula y sin carateres especiales
  ConvertirCadena(cadena: string): string {
    return cadena.toLowerCase().replace(/á/g, "a").replace(/ê/g, "i").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u")
  }

  seleccionLista(event) {
    this.longitud = 0;
    if (event.charCode == 13) {
      const patron = new RegExp(this.ConvertirCadena(this.buscar))
      this.longitud = this.ListClassRoomItem.length
      this.SearchClassRoomItem = this.ListClassRoomItem.filter((e) => { return patron.test(this.ConvertirCadena(e.name)) })
      // this.SearchClassRoom = this.ListClassRoom.slice(0, this.pageSize)
    }
  }

  pageChangeEvent(e) {
    this.pageSize = e.pageSize
    this.recorrerElementos(e.pageIndex)
  }

  recorrerElementos(pagina: number) {
    let pag = this.pageSize * pagina
    this.SearchClassRoomItem = this.ListClassRoomItem.slice(pag, pag + this.pageSize)
  }

}

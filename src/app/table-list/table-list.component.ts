import { Component, OnInit } from '@angular/core';
import { iClassRoom } from 'app/interfaces/class-room/class-room';
import { ClassroomService } from 'app/services/classroom.service';
import Swal from 'sweetalert2';
import { ApiService, IAPICore } from '../services/apicore/api.service';
import { PageEvent } from '@angular/material/paginator';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions:NgbModalOptions;

  public xAPI: IAPICore = {
    funcion: '',
    parametros: '',
    valores : ''
  }

  ListClassRoom!: iClassRoom[]
  SearchClassRoom!: iClassRoom[]
  public buscar = ''
  longitud = 0;
  pageSize = 6;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;


  valor1=0;
  valor2=0;
  resultado=0;

  sumar() {
    this.resultado = this.valor1 + this.valor2;
  }

  constructor(
    private apiService: ApiService,
    private classroomsSrv: ClassroomService,
    private modalService: NgbModal,
    ) {this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    } }

  ngOnInit() {
    this.ClassRoomList()
  }

  async ClassRoomList() {
    this.xAPI.funcion = 'AU_ClassRoom'
    this.xAPI.parametros = ''
    this.xAPI.valores = ''    
    this.apiService.Ejecutar(this.xAPI)
    await this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        // data.Cuerpo.forEach(e => {
        this.ListClassRoom = data.Cuerpo
        this.SearchClassRoom = data.Cuerpo
        this.longitud = data.Cuerpo.length
        // })
      },
      (error) => {
        // const Toast = Swal.mixin({
        //   toast: true,
        //   position: 'top-end',
        //   showConfirmButton: false,
        //   timer: 3000,
        //   timerProgressBar: true,
        //   didOpen: (toast) => {
        //     toast.addEventListener('mouseenter', Swal.stopTimer)
        //     toast.addEventListener('mouseleave', Swal.resumeTimer)
        //   }
        // })
        // Toast.fire({
        //   icon: 'error',
        //   title: 'Opps algo salio mal!',
        //   text: 'Revise la conexion del Middleware Code-Epic'
        // })
      }
    )

  }

  r(item): string {
    return btoa(JSON.stringify(item))
  }

  AddClassRoom(): void {
    this.classroomsSrv.AddClassRoom().subscribe(res => this.ListClassRoom.push(res));
  }

  ClassRoomDelete(item): void {
    Swal.fire({
      title: 'Esta Seguro?',
      text: `Se eliminara el documento ${item.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.classroomsSrv.DeleteClassRoom(item.id)
        .subscribe({
          next: data => {
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
              icon: 'success',
              title: 'Registro Eliminado 👍🏻'
            })
          },
          error: error => {
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
              title: 'Algo Salio Mal!'
            })
          }
      });
      }
    })
  }

open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  alertWithSuccess(item) {
    Swal.fire('Thank you...', item.name, 'success');
  }


  //convertir cadena a minuscula y sin carateres especiales
  ConvertirCadena(cadena: string): string {
    return cadena.toLowerCase().replace(/á/g, "a").replace(/ê/g, "i").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u")
  }

  seleccionLista(event) {
    this.longitud = 0;
    if (event.charCode == 13) {
      const patron = new RegExp(this.ConvertirCadena(this.buscar))
      this.longitud = this.ListClassRoom.length
      this.SearchClassRoom = this.ListClassRoom.filter((e) => { return patron.test(this.ConvertirCadena(e.name)) })
      // this.SearchClassRoom = this.ListClassRoom.slice(0, this.pageSize)
    }
  }

  pageChangeEvent(e) {
    this.pageSize = e.pageSize
    this.recorrerElementos(e.pageIndex)
  }

  recorrerElementos(pagina: number) {
    let pag = this.pageSize * pagina
    this.SearchClassRoom = this.ListClassRoom.slice(pag, pag + this.pageSize)
  }

  
}

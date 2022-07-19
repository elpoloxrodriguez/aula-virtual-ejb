import { Component, OnInit } from '@angular/core';
import { PageEvent} from '@angular/material/paginator';
import { iClassRoom } from '@core/interfaces/class-room/class-room';
import { ApiService, IAPICore } from '@core/services/apicore/api.service';
import Swal from 'sweetalert2';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.css'],
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})
export class ClassRoomComponent implements OnInit {

  title = 'ng-bootstrap-modal-demo';
  closeResult: string;

  public xAPI: IAPICore = {
    funcion: '',
    parametros: '',
    valores : ''
  }
  
  longitud = 0;
  pageSize = 6;
  public buscar = ''
  pageSizeOptions: number[] = [6, 10, 25, 100];
  pageEvent: PageEvent;

  ListClassRoom!: iClassRoom[]
  SearchClassRoom!: iClassRoom[]


  constructor(
    private apiService: ApiService,
    config: NgbModalConfig, 
    private modalService: NgbModal
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }


  async ngOnInit() {
    await this.ClassRoomList()
  }

  //convertir cadena a minuscula y sin carateres especiales
  ConvertirCadena(cadena: string): string {
    return cadena.toLowerCase().replace(/á/g, "a").replace(/ê/g, "i").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u")
  }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  open(content) {
    this.modalService.open(content);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  seleccionLista(event) {
    this.longitud = 0;
      const patron = new RegExp(this.ConvertirCadena(this.buscar))
      this.longitud = this.ListClassRoom.length
      this.SearchClassRoom = this.ListClassRoom.filter((e) => { return patron.test(this.ConvertirCadena(e.name)) })
  }


  async ClassRoomList() {
    this.xAPI.funcion = 'AU_ClassRoom'
    this.xAPI.parametros = ''
    this.xAPI.valores = ''    
    this.apiService.Ejecutar(this.xAPI)
    await this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        data.Cuerpo.forEach(e => {
          this.ListClassRoom = data.Cuerpo
          this.SearchClassRoom = data.Cuerpo
          this.longitud = data.Cuerpo.length
       });
      },
      (error) => {
        console.log(error)
      }
    )
  }

  async DeleteClassRoom(id: string) {
    this.xAPI.funcion = 'AU_D_ClassRoom'
    this.xAPI.parametros = id
    this.xAPI.valores = ''    
    this.apiService.Ejecutar(this.xAPI)
    await this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
       return data
      },
      (error) => {
       return error
      }
    )
  }

  async ClassRoomDelete(item) {
    Swal.fire({
      title: 'Desea eliminar el registro?',
      text: item.name,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
     this.DeleteClassRoom(item.id).then((result) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro eliminado',
        showConfirmButton: false,
        timer: 1500
      })
      this.ClassRoomList()
     }).catch()
      }
    })
  }

  r(item): string {
    return btoa(JSON.stringify(item))
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

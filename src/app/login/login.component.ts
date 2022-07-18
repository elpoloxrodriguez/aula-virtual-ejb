import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IToken, LoginService } from '../services/seguridad/login.service';
import { ClassroomService } from '../services/classroom.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  time = new Date().getFullYear();
  public usuario: string = ''
  public clave: string = ''

  public iToken: IToken = {
    token: '',
  };

  public itk: IToken;
  private index: number = 0;

  constructor(private classroomsSrv: ClassroomService,
     private route: Router,
     private loginService: LoginService, 
     ) { 
    if (sessionStorage.getItem("token") != undefined ){
      this.route.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {
  
  }


  // login() {
  //   let user = {
  //     username: this.username, password: this.password
  //   }
  //   this.classroomsSrv.Login(user).subscribe(
  //     (data) => { // Success
  //       let res = data.filter(
  //         (el: any) => {
  //           return el.username === user.username && el.password === user.password
  //         })
  //       if (res.length > 0) {
  //         const Toast = Swal.mixin({
  //           toast: true,
  //           position: 'top-end',
  //           showConfirmButton: false,
  //           timer: 3000,
  //           timerProgressBar: true,
  //           didOpen: (toast) => {
  //             toast.addEventListener('mouseenter', Swal.stopTimer)
  //             toast.addEventListener('mouseleave', Swal.resumeTimer)
  //           }
  //         })
  //         Toast.fire({
  //           icon: 'success',
  //           title: 'Bienvenidos ✅'
  //         })

  //         this.route.navigate(['/dashboard'])
  //       } else {
  //         const Toast = Swal.mixin({
  //           toast: true,
  //           position: 'top-end',
  //           showConfirmButton: false,
  //           timer: 3000,
  //           timerProgressBar: true,
  //           didOpen: (toast) => {
  //             toast.addEventListener('mouseenter', Swal.stopTimer)
  //             toast.addEventListener('mouseleave', Swal.resumeTimer)
  //           }
  //         })
  //         Toast.fire({
  //           icon: 'error',
  //           title: 'Datos incorrectos ❌'
  //         })
  //       }
  //     },
  //     (error) => {
  //       // console.log(error);
  //       const Toast = Swal.mixin({
  //         toast: true,
  //         position: 'top-end',
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.addEventListener('mouseenter', Swal.stopTimer)
  //           toast.addEventListener('mouseleave', Swal.resumeTimer)
  //         }
  //       })
  //       Toast.fire({
  //         icon: 'error',
  //         title: 'Algo salio mal!'
  //       })
  //     }
  //   );
  // }


  async login(){   
    // console.log(this.usuario, this.clave) 
    await this.loginService.getLogin(this.usuario, this.clave).subscribe(
      (data) => { // Success
        this.itk = data;
        sessionStorage.setItem("token", this.itk.token );
        this.route.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error)
        this.usuario = ''
        this.clave = ''
        // this.toastrService.error(
        //   'Error al acceder a los datos de conexion',
        //   `Bus Empresarial`
        // );
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
                    title: 'Error al acceder a los datos de conexion ❌'
                  })
      }
    );
  }

}

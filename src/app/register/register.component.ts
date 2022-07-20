import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService, IAPICore } from '@core/services/apicore/api.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  public  AU_C_Persons = [{
    id : 213,
    name1	:	'scdc',
    name2	 :	'scdc',
    surname1	 :	'scdc',
    surname2	 :	'scdc',
    phone	 :	'scdc',
    description	 :	'scdc',
    identificationcard	 :	'scdc',
    hierarchy	 :	'scdc',
    profile	 :	3,
    email	 :	'scdc',
    password	 :	'scdc'
  }]

  selectedValue: string;
  items
  checkoutForm;
  groud;
  user;

  valor1 = ''

  nameSpinner = false


  hide = true;
  hidePassword = true;
  matcher = new MyErrorStateMatcher()
  email = new FormControl('', [Validators.required, Validators.email])
  phone = new FormControl('', [Validators.required])
  identificationCard =  new FormControl('', [Validators.required])
  name1 =  new FormControl('', [Validators.required])
  surname1 =  new FormControl('', [Validators.required])
  hierarchy =  new FormControl('', [Validators.required])
  password =  new FormControl('', [Validators.required])
  confirmPassword =  new FormControl('', [Validators.required])
  description =  new FormControl('', [Validators.required])
  
  grados = [
    {value: 'G/J', name: 'General en Jefe'},
    {value: 'M/G', name: 'Mayor General'},
    {value: 'G/D', name: 'General de Disivison'},
    {value: 'G/B', name: 'General de Brigada'},
    {value: 'Cnel', name: 'Coronel'},
    {value: 'Tcnel', name: 'Teniente Coronel'},
    {value: 'May', name: 'Mayor'},
    {value: 'Cap', name: 'Capitán'},
    {value: 'Ptte', name: 'Primer Teniente'},
    {value: 'Tte', name: 'Teniente'},
  ];

  public xAPI: IAPICore = {
    funcion: '',
    parametros: '',
    valores : ''
  }

 
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      hierarchy: '',
      identificationCard: '',
      username: '',
      name1: '',
      name2: '',
      surname1: '',
      surname2: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      description: '',
    });
   }

  ngOnInit(): void {
  }



  async onSubmit(customerData) {
    // Process checkout data here
  this.nameSpinner = true
  this.xAPI.funcion = 'AU_C_Persons'
  this.xAPI.parametros = ''
  this.xAPI.valores = JSON.stringify(this.AU_C_Persons)
  await this.apiService.EjecutarDevel(this.xAPI).subscribe(
    (data) => {
      console.info(data)
      this.checkoutForm.reset();
      this.nameSpinner = false
    },
    (error) => {
      console.error(error)
    }
  )
  console.warn(customerData)
  }

}



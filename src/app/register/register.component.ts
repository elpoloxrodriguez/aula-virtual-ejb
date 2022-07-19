import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  selectedValue: string;

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

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

import { ServiceApiService } from '../service-api.service';
import { Cliente } from '../cliente.model';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  addForm!: FormGroup;

  cliente: Cliente = new Cliente();

  constructor(
    private service: ServiceApiService
  ) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      id: new FormControl(''),
      cpf: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      nascimento: new FormControl(''),
      sexo: new FormControl(''),
      endereco: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
    });
  }

  get cpf() {
    return this.addForm.get('cpf')!
  }

  get nome() {
    return this.addForm.get('nome')!
  }

  get nascimento() {
    return this.addForm.get('nascimento')!
  }

  get sexo() {
    return this.addForm.get('sexo')!
  }

  get endereco() {
    return this.addForm.get('endereco')!
  }

  get cidade() {
    return this.addForm.get('cidade')!
  }

  get estado() {
    return this.addForm.get('estado')!
  }


  submit() {
    if(this.addForm.invalid) {
      return;
    }

    this.submit.apply(this.addForm.value);
  }

}

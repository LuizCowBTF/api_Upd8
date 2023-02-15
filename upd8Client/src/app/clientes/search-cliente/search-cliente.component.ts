import { Component, OnInit } from '@angular/core';

import { ServiceApiService } from '../service-api.service';
import { Cliente } from '../cliente.model';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-cliente',
  templateUrl: './search-cliente.component.html',
  styleUrls: ['./search-cliente.component.css'],
  preserveWhitespaces: true
})
export class SearchClienteComponent implements OnInit {

  searchForm!: FormGroup;

  cliente: Cliente = new Cliente();

  constructor(
    private service: ServiceApiService
  ) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
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
    return this.searchForm.get('cpf')!
  }

  get nome() {
    return this.searchForm.get('nome')!
  }

  get nascimento() {
    return this.searchForm.get('nascimento')!
  }

  get sexo() {
    return this.searchForm.get('sexo')!
  }

  get endereco() {
    return this.searchForm.get('endereco')!
  }

  get cidade() {
    return this.searchForm.get('cidade')!
  }

  get estado() {
    return this.searchForm.get('estado')!
  }


  submit() {
    if(this.searchForm.invalid) {
      return;
    }

    this.submit.apply(this.searchForm.value);
  }


}

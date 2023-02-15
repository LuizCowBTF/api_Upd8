import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceApiService } from './../service-api.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css'],
  preserveWhitespaces: true
})

export class ListarClienteComponent implements OnInit {

  clienteLista$!: Observable<any>;
  clienteTipoLista$!: Observable<any>;

  clienteTipoLista: any = [];


  constructor(
    private service: ServiceApiService
  ) { }

  ngOnInit(): void {
    this.clienteLista$ = this.service.getAllClient();
    this.clienteTipoLista$ = this.service.getAllTypeClient();
  }

  remover($event: any): void {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover a pessoa ${this.clienteLista$}`)){
      this.service.deleteClient;
    }
  }

}

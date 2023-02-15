import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor() { }

  ngOnInit(): void {
  }

}

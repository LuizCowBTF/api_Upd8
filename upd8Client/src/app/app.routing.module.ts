import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListarClienteComponent } from './clientes/listar-cliente/listar-cliente.component';
import { AddClienteComponent } from './clientes/add-cliente/add-cliente.component';
import { EditClienteComponent } from './clientes/edit-cliente/edit-cliente.component';
import { SearchClienteComponent } from './clientes/search-cliente/search-cliente.component';


const routes: Routes = [
  {path: '', component: ListarClienteComponent},
  {path: 'add', component: AddClienteComponent},
  {path: 'edit', component: EditClienteComponent},
  {path: 'search', component: SearchClienteComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

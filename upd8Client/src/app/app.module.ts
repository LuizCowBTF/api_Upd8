import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListarClienteComponent } from './clientes/listar-cliente/listar-cliente.component';

import { ServiceApiService } from './clientes/service-api.service';
import { AddClienteComponent } from './clientes/add-cliente/add-cliente.component';
import { EditClienteComponent } from './clientes/edit-cliente/edit-cliente.component';
import { SearchClienteComponent } from './clientes/search-cliente/search-cliente.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListarClienteComponent,
    AddClienteComponent,
    EditClienteComponent,
    SearchClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiceApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

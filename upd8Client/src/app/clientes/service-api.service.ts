import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  readonly ApiUrl = "https://localhost:7240/api";

  constructor(private http: HttpClient) { }

  //SERVIÇOS PARA OS CLIENTES
  getAllClient(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + '/clientes');
  }

  addClient(data: any) {
    return this.http.post(this.ApiUrl + '/clientes', data);
  }

  upDateClient(id: number | string, data: any) {
    return this.http.put(this.ApiUrl + `/clientes/${ id }`, data);
  }

  deleteClient(id: number | string) {
    return this.http.delete(this.ApiUrl + `clientes/${ id }`);
  }

  //SERVIÇOS PARA TIPO DE CLIENTES
  getAllTypeClient(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + '/clienteTipos');
  }

  addTypeClient(data: any) {
    return this.http.post(this.ApiUrl + '/clienteTipos', data);
  }

  upDateTypeClient(id: number | string, data: any) {
    return this.http.put(this.ApiUrl + `/clienteTipos/${ id }`, data);
  }

  deleteTypeClient(id: number | string) {
    return this.http.delete(this.ApiUrl + `clienteTipos/${ id }`);
  }

  //SERVICÇOS PARA STATUS DOS CLIENTES
  getAllStatusClient(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + '/status');
  }

  addStatusClient(data: any) {
    return this.http.post(this.ApiUrl + '/status', data);
  }

  upDateStatusClient(id: number | string, data: any) {
    return this.http.put(this.ApiUrl + `/status/${ id }`, data);
  }

  deleteStatusClient(id: number | string) {
    return this.http.delete(this.ApiUrl + `status/${ id }`);
  }

}

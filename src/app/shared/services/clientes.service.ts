import { Injectable } from '@angular/core';
import { Cliente } from "../models/cliente";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  URL_CLIENTS = 'https://gamestoregps.herokuapp.com/clients';

  constructor(private httpClient: HttpClient) { }
  listar(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.URL_CLIENTS);
  }
  inserir(obj: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.URL_CLIENTS, obj);
  }
  pesquisarPorId(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.URL_CLIENTS}/${id}`);
  }
  atualizar(obj: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.URL_CLIENTS}/${obj.id}`, obj);
  }
}

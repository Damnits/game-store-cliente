import { Injectable } from '@angular/core';
import { Endereco } from "../models/endereco";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecosService {
  URL_ADDRESS = 'https://gamestoregps.herokuapp.com/address';

  constructor(private httpClient: HttpClient) { }
  listar(): Observable<Endereco[]> {
    return this.httpClient.get<Endereco[]>(this.URL_ADDRESS);
  }
  inserir(obj: Endereco): Observable<Endereco> {
    return this.httpClient.post<Endereco>(this.URL_ADDRESS, obj);
  }
  pesquisarPorId(id: number): Observable<Endereco> {
    return this.httpClient.get<Endereco>(`${this.URL_ADDRESS}/${id}`);
  }
  atualizar(obj: Endereco): Observable<Endereco> {
    return this.httpClient.put<Endereco>(`${this.URL_ADDRESS}/${obj.id}`, obj);
  }
}

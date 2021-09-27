import { Injectable } from '@angular/core';
import {Produto} from "../models/produto";
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  URL_PRODUTOS = 'https://gamestoregps.herokuapp.com/products';

  constructor(private httpClient: HttpClient) { }
  listar(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.URL_PRODUTOS);
  }
  inserir(obj: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.URL_PRODUTOS, obj);
  }
  pesquisarPorId(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>(`${this.URL_PRODUTOS}/${id}`);
  }
  atualizar(obj: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(`${this.URL_PRODUTOS}/${obj.id}`, obj);
  }
}

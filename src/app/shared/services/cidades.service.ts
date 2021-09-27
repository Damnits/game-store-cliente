import { Injectable } from '@angular/core';
import { Cidade } from "../models/cidade";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {
  URL_CITIES = 'https://gamestoregps.herokuapp.com/cities';

  constructor(private httpClient: HttpClient) { }
  listar(): Observable<Cidade[]> {
    return this.httpClient.get<Cidade[]>(this.URL_CITIES);
  }
  inserir(obj: Cidade): Observable<Cidade> {
    return this.httpClient.post<Cidade>(this.URL_CITIES, obj);
  }
  pesquisarPorId(id: number): Observable<Cidade> {
    return this.httpClient.get<Cidade>(`${this.URL_CITIES}/${id}`);
  }
  atualizar(obj: Cidade): Observable<Cidade> {
    return this.httpClient.put<Cidade>(`${this.URL_CITIES}/${obj.id}`, obj);
  }
}

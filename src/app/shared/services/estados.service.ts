import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  URL_STATES = 'https://gamestoregps.herokuapp.com/states';

  constructor(private httpClient: HttpClient) { }
  listar(): Observable<Estado[]> {
    return this.httpClient.get<Estado[]>(this.URL_STATES);
  }

  pesquisarPorId(id: number): Observable<Estado> {
    return this.httpClient.get<Estado>(`${this.URL_STATES}/${id}`);
  }
  
}

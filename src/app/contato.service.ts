import { Injectable } from '@angular/core';
import { HttpClient } from '@ngular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatosUrl = 'http://localhost:8080/contatos'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.contatosUrl}`);
  }
}

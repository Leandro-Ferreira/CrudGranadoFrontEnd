import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPessoa } from '../model/ipessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private url: string = "http://localhost:5208/api/Pessoa/cadastrarPessoa";

  constructor(private http: HttpClient) { 
  }

  cadastrarPessoa(pessoa:IPessoa): Observable<any>{

    const headers = { 'content-type': 'application/json'}  
  
    const body = JSON.stringify(pessoa);
  
    return this.http.post(this.url, body,{'headers':headers,'responseType':'text'});

  }
}

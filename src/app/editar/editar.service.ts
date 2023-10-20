import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPessoa } from '../model/ipessoa';

@Injectable({
  providedIn: 'root'
})
export class EditarService {
  
  private baseUrl: string = "http://localhost:5208/api/Pessoa/";

  constructor(private http: HttpClient) { }

  listarPessoas():Observable<any>{
    
      return this.http.get(this.baseUrl + "listarTodasAsPessoas",{'responseType':'json'});
  }

  atualizar(pessoa:IPessoa):Observable<any> {
 
    const headers = { 'content-type': 'application/json'}  
  
    const body = JSON.stringify(pessoa); 
    
    return this.http.put(this.baseUrl + "atualizarPessoa",body,{headers,'responseType':'text'});
  }

  excluir(pessoa:IPessoa):Observable<any> {

    return this.http.delete(this.baseUrl + "excluirPessoa?id="+`${pessoa.id}`,{'responseType':'text'});
  }
}

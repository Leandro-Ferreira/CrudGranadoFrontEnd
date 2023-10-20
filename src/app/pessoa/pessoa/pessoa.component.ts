import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoaService } from '../pessoa.service';
import { IPessoa } from 'src/app/model/ipessoa';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css'],
  providers: [MessageService]
})
export class PessoaComponent implements OnInit {

  pessoaForm!: FormGroup;
  
  constructor(private service:PessoaService, private frmBuilder:FormBuilder,private messageService: MessageService) { }

  submitted:boolean = false;

  ngOnInit(): void {
     this.pessoaForm = this.frmBuilder.group({
        nome:     ["", Validators.required],
        cpf:      ["", Validators.required],
        telefone: ["", Validators.required],
        email:    ["", Validators.required]
      });
  }

  get nome() {
    return this.pessoaForm.get('nome');
  } 

  get cpf() {
    return this.pessoaForm.get('cpf');
  } 

  get telefone() {
    return this.pessoaForm.get('telefone');
  } 

  get email() {
    return this.pessoaForm.get('email');
  } 

  salvar(){

    this.submitted = true;

    if(this.pessoaForm.valid){
      
      const nome     = this.nome?.value;
      const cpf      = this.cpf?.value ;
      const telefone = this.telefone?.value;
      const email    = this.email?.value;

      var pessoa : IPessoa = { nome:nome ,cpf:cpf, telefone:telefone, email:email };
   
      this.service.cadastrarPessoa(pessoa)
      .subscribe(result=> {
        let respostaServidor: string = result;

        if(respostaServidor.indexOf("sucesso") === -1){
          this.messageService.add({severity:'error', summary: 'Erro ao cadastrar', detail: respostaServidor, life: 4000});
       }
       else{
         this.messageService.add({severity:'success', summary: 'Cadastro', detail: respostaServidor, life: 4000});
       } 

      });
    }
  }

}
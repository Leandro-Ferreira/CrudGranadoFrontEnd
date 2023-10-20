import { Component, OnInit } from '@angular/core';
import { EditarService } from '../editar.service';
import { IPessoa } from 'src/app/model/ipessoa';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class EditarComponent implements OnInit {
 
  pessoas!: IPessoa[];
  
  pessoa!: IPessoa;

  submitted!: boolean

  pessoaDialog!: boolean;

  temDadosParaExibir:boolean = false;

  naoTemDadosParaExibicao:boolean = false;

  constructor(private service: EditarService,private messageService: MessageService, 
    private confirmationService: ConfirmationService) { }


    private inicializarTabela(){
      this.service.listarPessoas().subscribe(result=>{
        if(result.length > 0){
           this.pessoas = result
           this.temDadosParaExibir = true; 
         }
         else{
          this.temDadosParaExibir = false; 
          this.naoTemDadosParaExibicao = true;
         }
      
      });
    }


  ngOnInit(): void {
    this.inicializarTabela();
  }

  

  editar(pessoa: IPessoa){
    this.pessoa = {...pessoa};
    this.pessoaDialog = true;
  }

  excluir(pessoa: IPessoa){
    this.confirmationService.confirm({
      message: 'Deseja excluir ' + pessoa.nome + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.service.excluir(pessoa)
              .subscribe(result => {
                  this.inicializarTabela();
                  this.messageService.add({severity:'success', summary: 'Exclusão', detail:result, life: 3500})
                  
              });
      }
  });

  }

  fecharDialogo(){
    this.inicializarTabela();
  }

  salvarEdicao(pessoa: IPessoa){

    this.submitted = true;
    
    this.service.atualizar(pessoa)
                 .subscribe(result  => {
                        let respostaServidor: string = result;

                        if(respostaServidor.indexOf("inválido!") > -1){
                          this.messageService.add({severity:'error', summary: 'Erro ao atualizar', detail: respostaServidor, life: 4000});
                       }
                       else{
                         this.messageService.add({severity:'success', summary: 'Atualização de pessoa', detail: respostaServidor, life: 4000});
                       } 
               });
  }
   
  


}

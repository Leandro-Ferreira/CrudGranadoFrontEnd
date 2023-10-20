import { NgModule } from '@angular/core';
import { PessoaComponent } from './pessoa/pessoa/pessoa.component';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar/editar.component';

const routes: Routes = [
  { path:'cadastrar',component:PessoaComponent },
  { path:'editar',component: EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

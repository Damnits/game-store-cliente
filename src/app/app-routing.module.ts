import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarProdutosComponent} from "./produto/listar-produtos/listar-produtos.component";
import {CadastroProdutoComponent} from "./produto/cadastro-produto/cadastro-produto.component";
import { ListarClientesComponent } from './cliente/listar-clientes/listar-clientes.component';
import { CadastrarClienteComponent } from './cliente/cadastrar-cliente/cadastrar-cliente.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'listar-produtos', component: ListarProdutosComponent},
  {path:'cadastrar-produtos', component: CadastroProdutoComponent},
  { path: 'listar-clientes', component: ListarClientesComponent },
  { path: 'cadastrar-cliente', component: CadastrarClienteComponent }
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

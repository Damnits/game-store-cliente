import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarProdutosComponent} from "./produto/listar-produtos/listar-produtos.component";
import {CadastroProdutoComponent} from "./produto/cadastro-produto/cadastro-produto.component";
import { ListarClientesComponent } from './cliente/listar-clientes/listar-clientes.component';
import { CadastrarClienteComponent } from './cliente/cadastrar-cliente/cadastrar-cliente.component';
import { HomeComponent } from './home/login/home.component';
import { CadastrousuarioComponent } from './home/cadastrousuario/cadastrousuario.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path:'listar-produtos', component: ListarProdutosComponent, canActivate: [AuthGuardService] },
  { path:'cadastrar-produtos', component: CadastroProdutoComponent, canActivate: [AuthGuardService] },
  { path: 'listar-clientes', component: ListarClientesComponent, canActivate: [AuthGuardService] },
  { path: 'cadastrar-cliente', component: CadastrarClienteComponent, canActivate: [AuthGuardService] },
  { path: 'cadastrar-usuario', component: CadastrousuarioComponent}
  ]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

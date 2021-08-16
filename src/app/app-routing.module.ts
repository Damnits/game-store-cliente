import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarProdutosComponent} from "./produto/listar-produtos/listar-produtos.component";
import {CadastroProdutoComponent} from "./produto/cadastro-produto/cadastro-produto.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: '', component: ListarProdutosComponent},
  {path:'listar-produtos', component: ListarProdutosComponent},
  {path:'cadastrar-produtos', component: CadastroProdutoComponent}
    ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

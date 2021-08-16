import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListarProdutosComponent} from "./listar-produtos/listar-produtos.component";
import {CadastroProdutoComponent} from "./cadastro-produto/cadastro-produto.component";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ListarProdutosComponent,
    CadastroProdutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProdutoModule { }

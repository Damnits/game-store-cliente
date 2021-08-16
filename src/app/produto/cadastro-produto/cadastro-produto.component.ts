import { Component, OnInit } from '@angular/core';
import {ProdutosService} from "../../services/produtos.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent{

  public productForm: FormGroup;

  constructor(private fb: FormBuilder,
              private produtoService: ProdutosService,
              private roteador: Router) {
    this.productForm = this.fb.group({
      title: ["", [Validators.required]],
      value: ["", [Validators.required]],
      price: ["", [Validators.required]],
      description: [""],
      quantity: ["", [Validators.required]]
    })
  }

  onSubmit(){
    this.inserirProduto()
  }

  inserirProduto(){
    const produto = this.productForm.value;

    this.produtoService.inserir(produto).subscribe(
      produtoInserido => {
        this.roteador.navigate(['listar-produtos'])
      }
    )
  }
}

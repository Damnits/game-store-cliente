import { Component, OnInit } from '@angular/core';
import {Produto} from "../../shared/models/produto";
import {ProdutosService} from "../../services/produtos.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto

  cadastroForm = new FormGroup({
    title: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl(''),
    quantity: new FormControl('', Validators.required)
  })

  constructor(private fb: FormBuilder,
              private produtoService: ProdutosService,
              private roteador: Router) {
    this.produto = new Produto()
  }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      title: [this.produto.title,[ Validators.required]],
      value: [this.produto.value, [Validators.required]],
      price: [this.produto.price, [Validators.required]],
      description: [this.produto.description],
      quantity: [this.produto.quantity, [Validators.required]]
    })
  }
  onSubmit(){
    this.inserirProduto()
  }

  inserirProduto(){
    this.produtoService.inserir(this.produto).subscribe(
      produtoInserido => {
        this.roteador.navigate(['listar-produtos'])
      }
    )
  }
}

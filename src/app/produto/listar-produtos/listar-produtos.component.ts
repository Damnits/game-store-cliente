import { Component, OnInit } from '@angular/core';
import {Produto} from "../../shared/models/produto";
import {ProdutosService} from "../../services/produtos.service";

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos: Array<Produto> | undefined;

  constructor(private produtoService: ProdutosService) { }

  ngOnInit(): void {
    this.produtoService.listar().subscribe(
      produtos => this.produtos = produtos
    )
  }

}

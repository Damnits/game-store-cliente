import { Component, OnInit } from '@angular/core';
import { Produto } from "../../shared/models/produto";
import { ProdutosService } from "../../shared/services/produtos.service";

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
      objs => this.produtos = objs
    )
  }

}

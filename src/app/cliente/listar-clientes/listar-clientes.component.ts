import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../shared/models/cliente';
import { ClientesService } from '../../shared/services/clientes.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: Array<Cliente> | undefined;

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(
      objs => this.clientes = objs
    )
  }

}

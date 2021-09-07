import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';

@NgModule({
  declarations: [
    ListarClientesComponent,
    CadastrarClienteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ClienteModule { }

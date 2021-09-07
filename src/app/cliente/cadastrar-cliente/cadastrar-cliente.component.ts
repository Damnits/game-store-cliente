import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/shared/services/clientes.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
    private service: ClientesService,
    private roteador: Router) {
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      cpf: ["", [Validators.required]],
    })
  }

  onSubmit() {
    this.inserir()
  }

  inserir() {
    const obj = this.form.value;

    this.service.inserir(obj).subscribe(
      newObj => {
        this.roteador.navigate(['listar-clientes'])
      }
    )
  }

}

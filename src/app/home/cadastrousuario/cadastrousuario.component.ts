import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/shared/services/clientes.service';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.component.html',
  styleUrls: ['./cadastrousuario.component.css']
})
export class CadastrousuarioComponent implements OnInit {

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


  ngOnInit(): void {
  }
  onSubmit() {
    this.inserir()
  }
  inserir() {
    const obj = this.form.value;

    this.service.inserir(obj).subscribe(
      newObj => {
        this.roteador.navigate([''])
      }
    )
  }

}

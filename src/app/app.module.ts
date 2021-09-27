import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigatorComponent } from './navigator/navigator.component';
import { ProdutoModule } from "./produto/produto.module";
import { ClienteModule } from "./cliente/cliente.module";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/login/home.component';
import { CadastrousuarioComponent } from './home/cadastrousuario/cadastrousuario.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    HomeComponent,
    CadastrousuarioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutoModule,
    ClienteModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

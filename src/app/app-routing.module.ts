import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './public/pagina-inicial/pagina.inicial.component';
import { LoginLayoutComponent } from './public/login/login-layout/login-layout.component';
import { EsqueciSenhaComponent } from './public/login/esqueci-senha/esqueci-senha.component';
import { CadastroComponent } from './public/login/cadastro/cadastro.component';
import { LogadoPgnInicialComponent } from './cliente/logado-pgn-inicial/logado-pgn-inicial.component';
import { HeaderComponent } from './cliente/header/header.component';


const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'login', component: LoginLayoutComponent },

  {path: 'esqueci-senha' , component: EsqueciSenhaComponent},
  {path: 'cadastro' , component: CadastroComponent},
  {path: 'pagina-inicial-logado' , component: LogadoPgnInicialComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

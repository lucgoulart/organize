import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina.inicial.component';
import { LoginLayoutComponent } from './login/login-layout/login-layout.component';
import { EsqueciSenhaComponent } from './login/esqueci-senha/esqueci-senha.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { LogadoPgnInicialComponent } from './usuario-logado/logado-pgn-inicial/logado-pgn-inicial.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'login', component: LoginLayoutComponent },

  {path: 'esqueci-senha' , component: EsqueciSenhaComponent},
  {path: 'cadastro' , component: CadastroComponent},
  {path: 'pagina-inicial-logado' , component: LogadoPgnInicialComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


import { RouterModule, Routes } from '@angular/router';
import { OrganizarMinhasContasComponent } from './organizar-minhas-contas/organizar-minhas-contas.component';
import { NgModule } from '@angular/core';
import { LogadoPgnInicialComponent } from './logado-pgn-inicial.component';
import { LoginLayoutComponent } from 'src/app/public/login/login-layout/login-layout.component';



const routes: Routes = [
{path: 'pagina-inicial-logado',
component: LogadoPgnInicialComponent,
children: [
  {path: 'organizar-minhas-contas', component: OrganizarMinhasContasComponent}
]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogadoPgnInicialRouting {}

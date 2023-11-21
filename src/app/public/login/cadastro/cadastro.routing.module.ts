
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from 'src/app/public/login/login-layout/login-layout.component';
import { CadastroComponent } from './cadastro.component';
import { NgModule } from '@angular/core';



const routes: Routes = [
{path: 'cadastro',
component: CadastroComponent,
children: [
  {path: 'login', component: LoginLayoutComponent}
]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class cadastroRouting {}

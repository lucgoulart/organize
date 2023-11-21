
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from 'src/app/public/login/login-layout/login-layout.component';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';



const routes: Routes = [
{path: 'header',
component: HeaderComponent,
children: [
  {path: 'login', component: LoginLayoutComponent}
]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class headerRouting {}

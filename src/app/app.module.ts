import { LoginLayoutComponent } from './login/login-layout/login-layout.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina.inicial.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EsqueciSenhaComponent } from './login/esqueci-senha/esqueci-senha.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { LogadoPgnInicialComponent } from './usuario-logado/logado-pgn-inicial/logado-pgn-inicial.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrganizarMinhasContasComponent } from './organizar-minhas-contas/organizar-minhas-contas.component';
@NgModule({
  declarations: [		
    AppComponent,
    PaginaInicialComponent,
    LoginLayoutComponent,
    EsqueciSenhaComponent,
    CadastroComponent,
    LogadoPgnInicialComponent,
      HeaderComponent,
      FooterComponent,
      OrganizarMinhasContasComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

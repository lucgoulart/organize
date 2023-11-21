import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsqueciSenhaComponent } from './public/login/esqueci-senha/esqueci-senha.component';
import { LoginLayoutComponent } from './public/login/login-layout/login-layout.component';
import { PaginaInicialComponent } from './public/pagina-inicial/pagina.inicial.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './cliente/header/header.component';
import { FooterComponent } from './cliente/footer/footer.component';
import { OrganizarMinhasContasComponent } from './cliente/organizar-minhas-contas/organizar-minhas-contas.component';
import { LogadoPgnInicialComponent } from './cliente/logado-pgn-inicial/logado-pgn-inicial.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    PaginaInicialComponent,
    EsqueciSenhaComponent,
    EsqueciSenhaComponent,
    LogadoPgnInicialComponent,
    OrganizarMinhasContasComponent,
      HeaderComponent,
      FooterComponent,
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsqueciSenhaComponent } from './public/login/esqueci-senha/esqueci-senha.component';
import { LoginLayoutComponent } from './public/login/login-layout/login-layout.component';
import { PaginaInicialComponent } from './public/pagina-inicial/pagina.inicial.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './cliente/footer/footer.component';
import { LogadoPgnInicialModule } from './cliente/logado-pgn-inicial/logado-pgn-inicial.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    PaginaInicialComponent,
    EsqueciSenhaComponent,
    EsqueciSenhaComponent,
    FooterComponent,
],
  imports: [
    BrowserModule,
    LogadoPgnInicialModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot([]),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

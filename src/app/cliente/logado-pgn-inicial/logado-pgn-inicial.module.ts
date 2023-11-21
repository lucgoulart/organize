import { LogadoPgnInicialRouting } from './logado-pgn-inicial.routing.module';
import { AppComponent } from './../../app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { OrganizarMinhasContasComponent } from './organizar-minhas-contas/organizar-minhas-contas.component';
import { LogadoPgnInicialComponent } from './logado-pgn-inicial.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    LogadoPgnInicialComponent,
    OrganizarMinhasContasComponent,
  ],
  imports: [
    BrowserModule,
    LogadoPgnInicialRouting,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class LogadoPgnInicialModule {}

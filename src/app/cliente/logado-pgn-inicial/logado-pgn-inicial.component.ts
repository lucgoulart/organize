import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logado-pgn-inicial',
  templateUrl: './logado-pgn-inicial.component.html',
  styleUrls: ['./logado-pgn-inicial.component.css']
})
export class LogadoPgnInicialComponent {
  constructor(private router: Router) {}

  openOrganizarMinhasContas(){
    this.router.navigate(['/organizar-minhas-contas'])
  }
}

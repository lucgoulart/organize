import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizar-minhas-contas',
  templateUrl: './organizar-minhas-contas.component.html',
  styleUrls: ['./organizar-minhas-contas.component.css']
})
export class OrganizarMinhasContasComponent {
  public mostrarComponente: boolean = false;

  constructor(private router: Router) {}

  toggleComponentVisibility() {
    this.mostrarComponente = !this.mostrarComponente;
  }
}


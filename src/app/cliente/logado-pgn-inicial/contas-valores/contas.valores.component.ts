import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contas-valores',
  templateUrl: './contas-valores.component.html',
  styleUrls: ['./contas-valores.component.css']
})
export class ContasValoresComponnet {
  public mostrarComponente: boolean = false;

  constructor(private router: Router) {}

  toggleComponentVisibility() {
    this.mostrarComponente = !this.mostrarComponente;
  }
}


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculadora-virtual',
  templateUrl: './calculadora-virtual.component.html',
  styleUrls: ['./calculadora-virtual.component.css']
})
export class CalculadoraVirtualComponnet {
  public mostrarComponente: boolean = false;

  constructor(private router: Router) {}

  toggleComponentVisibility() {
    this.mostrarComponente = !this.mostrarComponente;
  }
}


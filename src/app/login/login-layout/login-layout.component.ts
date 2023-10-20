import { MockAuthService } from './../../services/MockAuthService';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent {


  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private MockAuthService: MockAuthService) {}

  onContinueClick() {
    const isAuthenticated = this.MockAuthService.authenticate(
      this.email,
      this.password
    );

    if (isAuthenticated) {
      // O usuário está autenticado, você pode redirecioná-lo para a página principal
      console.log('Usuário autenticado!');
      this.loginError = false;
    } else {
      // Credenciais inválidas, exibir erro de login
      console.log('Credenciais inválidas');
      this.loginError = true;
    }
  }
}


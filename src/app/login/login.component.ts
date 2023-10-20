import { Component } from "@angular/core";
import { MockAuthService } from "../services/MockAuthService";


@Component({
  selector: 'app-login',
  templateUrl: '../login/login.component.html',
  styleUrls: ['../login/login.component.css']


})
export class LoginComponent{

  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: MockAuthService) {}

  onSubmit() {
    const isAuthenticated = this.authService.authenticate(
      this.username,
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


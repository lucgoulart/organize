import { MockAuthService } from './../../../services/MockAuthService';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import {Router, RouterStateSnapshot, UrlTree,} from '@angular/router';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent {


  email: string = '';
  password: string = '';
  loginError: boolean = false;
  showModal: boolean = false;


  constructor(private MockAuthService: MockAuthService, private router: Router) {}

  openModal(){
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }

  onContinueClick() {
    const isAuthenticated = this.MockAuthService.authenticate(
      this.email,
      this.password
    );

    if (isAuthenticated) {
      // O usuário está autenticado, você pode redirecioná-lo para a página principal
      this.router.navigate(['/pagina-inicial-logado']);
      this.loginError = false;
    } else {
      // Credenciais inválidas, exibir erro de login
      this.loginError = true;
      this.openModal()



    }
  }
}



import { Component,  HostListener } from '@angular/core';
@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent {


  ngAfterViewInit() {

    // iniciando componente com o campo de input já preparado para a digitação
    const firstInput = document.querySelector('[data-order="1"]') as HTMLInputElement;
    if (firstInput) {
      firstInput.focus();
    }
  }
  // funcionalidade para apagar automaticamente o conteúdo de um campo de entrada quando o usuário pressionar a tecla "Backspace".
  // quando o campo estiver vazio e o usuário pressionar "Backspace," o foco será movido para o campo de entrada anterior
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Backspace') {
      const currentInput = event.target as HTMLInputElement;
      const order = parseInt(currentInput.getAttribute('data-order') || '1', 10);

      if (order > 1 && currentInput.value === '') {
        const previousInput = document.querySelector(`[data-order="${order - 1}"]`) as HTMLInputElement;
        if (previousInput) {
          previousInput.focus();
          previousInput.value = '';
        }
      }
    }
  }

  // método,verificação para permitir apenas um dígito por campo de input - codigo de verificação
  onInput(event: Event) {
    const currentInput = event.target as HTMLInputElement;
    const order = parseInt(currentInput.getAttribute('data-order') || '1', 10);

    if (order < 5) {
      const nextInput = document.querySelector(`[data-order="${order + 1}"]`) as HTMLInputElement;
      if (currentInput.value.length === 1) {
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }
}

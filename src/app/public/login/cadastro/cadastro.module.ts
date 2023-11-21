import { cadastroRouting } from './cadastro.routing.module';
import { CadastroComponent } from './cadastro.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CadastroComponent],
  exports: [CadastroComponent], // Exporte o HeaderComponent
  imports: [cadastroRouting]
})
export class CadastroModule {}

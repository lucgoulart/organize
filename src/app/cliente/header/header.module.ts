import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent], // Exporte o HeaderComponent
})
export class HeaderModule {}

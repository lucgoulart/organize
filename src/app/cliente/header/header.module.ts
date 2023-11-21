import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { headerRouting } from './header.routing.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent], // Exporte o HeaderComponent
  imports: [headerRouting]
})
export class HeaderModule {}

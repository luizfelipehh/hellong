import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssinaturaComponent } from './assinatura/assinatura.component';
import { FootComponent } from './foot/foot.component';
import { TabuadaComponent } from './tabuada/tabuada.component';

@NgModule({
  declarations: [
    AppComponent,
    AssinaturaComponent,
    FootComponent,
    TabuadaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

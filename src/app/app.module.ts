import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { FormsModule } from '@angular/forms';
import { PotenciasComponent } from './potencia/potencias/potencias.component';

@NgModule({
  declarations: [
    AppComponent,
    OperasBasComponent,
    PotenciasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }

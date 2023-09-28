import { Component } from '@angular/core';

@Component({
  selector: 'app-potencias',
  templateUrl: './potencias.component.html',
  styleUrls: ['./potencias.component.css']
})
export class PotenciasComponent {

  NumA:any;
  NumB:any;
  resultado:any;
  resultadoOper:any;


  Operacion():void{
    this.resultadoOper = 0;
      for (let i = 0; i < this.NumB; i++) {
      this.resultadoOper = console.log('hola mundo');
      }
    }

 calcular():void{
  this.resultado = 0;
    for (let i = 0; i < this.NumB; i++) {
      this.resultado += parseInt(this.NumA);
    }
  }
}



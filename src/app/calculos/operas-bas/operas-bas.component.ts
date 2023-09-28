import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  num1:any;
  num2:any;
  resultado:any;
  operacion:string='';

  calcular():void{
    if(this.operacion == 'Suma')
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
     else if (this.operacion == 'Resta')
     this.resultado=parseInt(this.num1)-parseInt(this.num2);
      else if(this.operacion == 'Multipliacion')
      this.resultado=parseInt(this.num1)*parseInt(this.num2);
        else 
          if(parseInt(this.num2)== 0)
          this.resultado='no se puede dividir entre cero! Elige otro valor';
          else
          this.resultado=parseInt(this.num1)/parseInt(this.num2);
  }
}


import { Component } from '@angular/core';
import { Bicicleta } from '../_modelo/Bicicleta';

@Component({
  selector: 'app-bicicleta-formulario',
  templateUrl: './bicicleta-formulario.component.html',
  styleUrls: ['./bicicleta-formulario.component.css']
})
export class BicicletaFormularioComponent{
  color:string="";
  marca:string="";
  velocidad:number=0;
  fn:string="";
  velociadad2:number=0;
  piniones:number=0;
  platos:number=0;
  electrica:boolean=false;

  bicicleta: Bicicleta = new Bicicleta(this.color,this.marca,this.velocidad,this.piniones,this.platos,this.electrica);
  modificar(){
    switch (this.fn) {
      case "au":
        this.bicicleta.acelerar(this.velociadad2)
      break;

      case "ds":
       this.bicicleta.frenar(this.velociadad2)
      break;
    }
  }
}

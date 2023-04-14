  export class Bicicleta{
    color:string="";
    marca:string="";
    velocidad:number=0;
    piniones:number=0;
    platos:number=0;
    electrica:boolean=false;

    constructor(color:string,marca:string,velocidad:number,piniones:number,platos:number,electrica:boolean){
      this.color = color,
      this.marca = marca,
      this.velocidad=velocidad,
      this.piniones = piniones,
      this.platos = platos
      this.electrica = electrica
    }

    acelerar(velocidad2:number){
      this.velocidad = this.velocidad + velocidad2
    }
    frenar(velocidad2:number){
      this.velocidad=this.velocidad-velocidad2
    }

  }

import Barravida from './barravida.js';
export default class Ui extends Phaser.Scene {  
  constructor() {
    super({ key: "ui" });    
    //pasarle los datos con init
    //poner launch en lugar de run (duda del campus)
  }
  preload() {}
  
  init(datos) {
    this.p1 = datos.p1;
    this.p2 = datos.p2;
    this.vida = datos.vida;
    this.nombre = datos.name;
  }
  create() {         
    this.add.image(150,550,this.p1); 
    this.add.image(1130,550,this.p2);  
    this.add.image(640,550, 'dialogofondo');
    this.barraV = new Barravida(this,50,680,this.vida);
    this.add.text(140,695,this.vida,{fontFamily: 'VT323',fontSize: '22px', color: '#ffffff' }); //Temporal, necesitamos barra de vida
    const a = this.add.image(640,360,'lugar'); 
    const b = this.add.text(640,695,this.nombre,{fontFamily: 'VT323',fontSize: '26px', color: '#000000' }); //Hacerlo un sprite en el futuro    
    Phaser.Display.Align.In.Center(a, b);
  }
}
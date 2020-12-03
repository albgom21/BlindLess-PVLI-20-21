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
    this.add.image(1125,550,this.p2);  
    this.add.image(640,550, 'dialogofondo');
    this.add.text(125,700,this.vida); //Temporal, necesitamos barra de vida
    this.add.text(640,700,this.nombre); //Hacerlo un sprite en el futuro
  }
}
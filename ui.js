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
    this.add.text(125,700,this.vida); //Temporal, necesitamos barra de vida
    const a = this.add.image(640,360,'lugar'); 
    const b = this.add.text(640,695,this.nombre,{  fontFamily: 'IMPACT',fontSize: '26px', color: '#0000000' }); //Hacerlo un sprite en el futuro    
    Phaser.Display.Align.In.Center(a, b);
  }
}
import Barravida from './barravida.js';
export default class Ui extends Phaser.Scene {  
  constructor() {
    super({ key: "ui" });    
    //pasarle los datos con init
    //poner launch en lugar de run (duda del campus)
    this.dialogo = undefined;
  }
  preload() {}
  
  init(datos) {
    this.p1 = datos.p1;    
    this.p2 = datos.p2;    
    this.vida = datos.vida;
    this.nombre = datos.name;
    this.texto = datos.texto;
  }
  create() {         
    //Personajes
    this.add.image(150,550,this.p1); 
    this.add.image(1130,550,this.p2);  
    //Fondo dialogo 
    this.add.image(640,550, 'dialogofondo');
    this.add.text(300, 450, this.texto, { fontFamily: 'VT323',fontSize: '32px', color: '#ffff' });
    //Barra vida
    this.barraV = new Barravida(this,50,680,this.vida);
    this.add.text(140,695,this.vida,{fontFamily: 'VT323',fontSize: '22px', color: '#ffffff' });
    //Nombres personajes
    const p1fondoN = this.add.image(90,405,'fondonombre');
    const p1N = this.add.text(90,405,this.p1,{fontFamily: 'VT323',fontSize: '24px', color: '#ffffff' });
    const p2fondoN = this.add.image(1150,405,'fondonombre');
    const p2N = this.add.text(1150,405,this.p2,{fontFamily: 'VT323',fontSize: '22px', color: '#ffffff' });
    //InfoLugar
    const fondoLugar = this.add.image(640,360,'lugar'); 
    const nombreLugar = this.add.text(640,695,this.nombre,{fontFamily: 'VT323',fontSize: '26px', color: '#000000' }); 
    
    Phaser.Display.Align.In.Center(fondoLugar, nombreLugar);
    Phaser.Display.Align.In.Center(p1fondoN,p1N);
    Phaser.Display.Align.In.Center(p2fondoN,p2N);
  }
}
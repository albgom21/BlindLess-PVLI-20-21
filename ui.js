import Barravida from './barravida.js';
import AnimatedText from './animatedText.js';

export default class Ui extends Phaser.Scene {  
  constructor() {
    super({ key: "ui" });
  }
  
  init(datos) {
    this.p1 = datos.p1;    
    this.p2 = datos.p2;    
    this.vida = datos.vida;
    this.nombre = datos.name;
    this.texto = datos.texto;
    this.color = datos.color;
    this.primerTexto = datos.primerTexto;
  }
  create() {         
    this.objectsUi = [];
    // Personajes
    this.objectsUi.push(this.add.image(1130, 550, 'fondopersonaje'));
    this.objectsUi.push(this.add.image(150, 550, this.p1)); 
    this.objectsUi.push(this.add.image(1130, 550, this.p2));  

    // Fondo diálogo 
    this.objectsUi.push(this.add.image(640, 550, 'dialogofondo'));
    
    if(this.color === undefined) this.timer = new AnimatedText(this, this.texto,'#ffeba8')
    else this.timer = new AnimatedText(this, this.texto,this.color)

    // Barra vida
    this.barraV = new Barravida(this, 50, 680, this.vida);
    this.add.text(140, 695, this.vida, {fontFamily: 'VT323', fontSize: '22px', color: '#ffffff' });

    // Nombres personajes
    const p1fondoN = this.add.image(90, 405, 'fondonombre');
    const p1N = this.add.text(90, 405, this.p1, {fontFamily: 'VT323', fontSize: '24px', color: '#ffffff' });
    const p2fondoN = this.add.image(1150, 405, 'fondonombre'); 
    let tamLetraP2 = '22px';  
    if(this.p2.length == 8) {
      tamLetraP2 = '19px';   
   } 
    else if(this.p2.length > 7) {
       tamLetraP2 = '15px';   
    }     
    const p2N = this.add.text(1150, 405, this.p2, {fontFamily: 'VT323', fontSize:tamLetraP2 , color: '#ffffff' });
    
    // InfoLugar
    const fondoLugar = this.add.image(640, 360, 'lugar');
    const nombreLugar = this.add.text(640, 695, this.nombre, {fontFamily: 'VT323', fontSize: '26px', color: '#000000' }); 
    
    // if(this.restar<0) this.scene.cameras.shake(500);

    Phaser.Display.Align.In.Center(fondoLugar, nombreLugar);
    Phaser.Display.Align.In.Center(p1fondoN,p1N);
    Phaser.Display.Align.In.Center(p2fondoN,p2N);
    
    this.objectsUi.push(fondoLugar);
    this.objectsUi.push(p1fondoN);
    this.objectsUi.push(p2fondoN);
    this.objectsUi.push(nombreLugar);
    this.objectsUi.push(p1N);
    this.objectsUi.push(p2N);
    
    if(this.primerTexto) this.animacionPrimerTexto(this.objectsUi);
  }

  animacionPrimerTexto(objects, start = true){
    for(let i =0; i < objects.length; ++i){
      let value = 50;
      let imgAlpha = 0
      objects[i].y += value
      objects[i].alpha = 0
      imgAlpha = 1
      value *= -1
  
      this.tweens.add({
          targets: objects[i],
          duration: 150,
          y: objects[i].y + value,
          alpha: imgAlpha,
          ease: 'Circ',
          onComplete: () => { if (!start) objects[i].y -= value }
      })
    }
  }
}
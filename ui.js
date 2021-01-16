import Barravida from './barravida.js';
import AnimatedText from './animatedtext.js';

export default class Ui extends Phaser.Scene {  
  constructor() {
    super({ key: "ui" });
  }
  
  init(datos) {
    this.p1 = datos.p1;
    this.texto = datos.texto;
    this.color = datos.color;
    this.primerTexto = datos.primerTexto;
    this.personaje = datos.personaje;
  }
  create() {         
    this.objectsUi = [];
    // Personajes
    this.objectsUi.push(this.add.image(1130, 550, 'fondopersonaje'));
    this.objectsUi.push(this.add.image(150, 550, this.p1)); 
    this.objectsUi.push(this.add.image(1130, 550, this.personaje.name));  

    // Fondo diálogo 
    this.objectsUi.push(this.add.image(640, 550, 'dialogofondo'));
    
    if(this.color === undefined) this.timer = new AnimatedText(this, this.texto,'#ffeba8')
    else this.timer = new AnimatedText(this, this.texto,this.color)

    // Barra vida
    const barraV = new Barravida(this, 50, 680, this.personaje.scene.vidaMax);
    this.add.text(140, 695, this.personaje.scene.vidaMax, {fontFamily: 'VT323', fontSize: '22px', color: '#ffffff' });

    // Nombres personajes
    const p1fondoN = this.add.image(90, 405, 'fondonombre');
    const p1N = this.add.text(90, 405, this.p1, {fontFamily: 'VT323', fontSize: '24px', color: '#ffffff' });
    const p2fondoN = this.add.image(1150, 405, 'fondonombre'); 
    let tamLetraP2 = '22px';  
    if(this.personaje.name.length == 8) {
      tamLetraP2 = '19px';   
   } 
    else if(this.personaje.name.length > 7) {
       tamLetraP2 = '15px';   
    }     
    const p2N = this.add.text(1150, 405, this.personaje.name, {fontFamily: 'VT323', fontSize:tamLetraP2 , color: '#ffffff' });
    
    // InfoLugar
    const fondoLugar = this.add.image(640, 360, 'lugar');
    const nombreLugar = this.add.text(640, 695, this.personaje.scene.nameScene, {fontFamily: 'VT323', fontSize: '26px', color: '#000000' }); 
    
    // if(this.restar<0) this.scene.cameras.shake(500);

    Phaser.Display.Align.In.Center(fondoLugar, nombreLugar);
    Phaser.Display.Align.In.Center(p1fondoN,p1N);
    Phaser.Display.Align.In.Center(p2fondoN,p2N);
    
    
    const botonHablar = this.add.image(869,645, 'botonhablar').setInteractive();
    botonHablar.on('pointerdown', () => {
      this.personaje.seguirDialogos();
      });

    this.objectsUi.push(fondoLugar);
    this.objectsUi.push(p1fondoN);
    this.objectsUi.push(p2fondoN);
    this.objectsUi.push(nombreLugar);
    this.objectsUi.push(p1N);
    this.objectsUi.push(p2N);
    this.objectsUi.push(botonHablar);
    
    if(this.primerTexto) this.animacionPrimerTexto(this.objectsUi);

    
  }

  animacionPrimerTexto(objects){
    for(const n of objects){
      let value = 50;
      n.y += value
      n.alpha = 0
  
      this.tweens.add({
          targets: n,
          duration: 350,
          y: n.y - value,
          alpha: 1,
          ease: 'Circ'
      })
    }
  }
}
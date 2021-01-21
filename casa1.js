import Latino from './latino.js';
import Gafas from './gafas.js';
import Collet from './collet.js';
import dialogos from './dialogos.js';
import Coleccionables from './coleccionables.js';

export default class Casa1 extends Phaser.Scene {
    constructor() {
    super({ key: 'casa1'});    
    this.vidaMax = 100;
    this.pointScene = 0;
    this.menuActivado = false;   
    this.apareceLatino = false;
    this.fin = new Array(2); // array con el número de personajes  
    this.key = 'casa1';    
    this.datosInventario = {
      coleccionables : 0,
      nums : [],
      fijo : Math.floor(Math.random() * (1000 - 100) + 100)
    }
  }

  create() {  // Refactorizar diálogos y escena      
    this.cameras.main.fadeIn(1500); 
    this.scene.stop('inicio');
    this.nameScene = 'CASA';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'casa');         
    this.primerTicket = true;
    this.objeto = new Coleccionables(this, 220, 360, 'Baston');
    this.madame = new Collet(this, 500, 400, 'madamcuerpo', dialogos.mcCasa1, 0, true);       
    this.g = new Gafas(this, 733, 350, 'Gafas', dialogos.gafasCasa1, dialogos.gafasDCasa1);         
    const contxt = this.add.image(640, 360, 'contexto').setInteractive();
    
    this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
    this.botonT.visible = false;   
    this.musica = this.sound.add("musicacasa",{volume: 0.025,loop: true});   
    contxt.on('pointerdown', () => { this.musica.play();contxt.visible = false; this.botonT.visible = true;});  
    if (this.primerTicket){
      this.datosInventario.nums.push(Math.floor(Math.random() * (100 - 10) + 10));
      this.primerTicket = false;
    }
    // Botón del inventario.
    this.botonT.on('pointerdown', () => {  if(!this.menuActivado) this.scene.launch('inventario', {datosInventario: this.datosInventario}); }) 

    this.cameras.main.once('camerafadeoutcomplete', () => {
      if(this.pointScene >= 10){      
       this.musica.stop();
       this.scene.launch('mapa',{antEscena:this.key,proxEscena:'libreria',nombreEscena:'LIBRERIA',
       vida:this.vidaMax,suma:2,resta:14, datosInventario: this.datosInventario});
      }
      else{
      this.musica.stop();
      this.scene.launch('mapa',{antEscena:this.key,proxEscena:'calle1',nombreEscena:'CALLE',
      vida:this.vidaMax,suma:4,resta:11, datosInventario: this.datosInventario});
      }  
  });
  }  

aparece(){     
  this.latCuerpo = new Latino(this, 1000, 400, 'latcuerpo', dialogos.latCasa1, 1);    
  this.latCuerpo.image.x = 1100;
  this.latCuerpo.image.alpha = 0;
  this.tweens.add({
    targets: this.latCuerpo.image,
    duration: 1000,
    x: 1000,
    alpha: 1,
    ease: 'Linear'
})
}
  finEscena(){    
    let a = true ;
    let i = 0;
    while(a && i < this.fin.length) {
      if (this.fin[i]) i++;
      else a = false;
    }
    if(a) { //Que hayan hablado todos los personajes de la escena
      a = false;
      let botonEscena = this.add.image(1175, 100, 'botonescena').setInteractive();    
        botonEscena.once('pointerdown', () => { this.paso = this.sound.add("pasarescena",{volume:1}); this.paso.play(); this.cameras.main.fadeOut(1500)});     
    }       
  }    
}
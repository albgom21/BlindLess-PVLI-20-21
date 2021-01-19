import Latino from './latino.js';
import dialogos from './dialogos.js';
export default class CalleGormada extends Phaser.Scene {
  
  constructor() {
    super({ key: 'callegormada'});    
    this.menuActivado = false;   
    this.fin = new Array(1); // array con el número de personajes  
    this.key = 'callegormada';    
  }
  
  init(datos){
    this.vidaMax = datos.vidaMax;
    this.datosInventario = datos.datosInventario;
  }
  
  create() {  // Refactorizar diálogos y escena      
    this.cameras.main.fadeIn(1500); 
    this.scene.stop('mapa');
    this.nameScene = 'CALLE';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'calle');         
    this.latCuerpo = new Latino(this, 400, 500, 'latcuerpo', dialogos.dBunyel, 0);

    // Botón del inventario.
    this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
    if (!this.menuActivado) this.botonT.on('pointerdown', () => this.scene.launch('inventario', {datosInventario : this.datosInventario}));
    
    this.cameras.main.once('camerafadeoutcomplete', () => {
       this.scene.launch('mapa',{antEscena:this.key,proxEscena:'ministerio2',nombreEscena:'MINISTERIO',
       vida:this.vidaMax,suma:0 ,resta:0, datosInventario : this.datosInventario});
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
        botonEscena.once('pointerdown', () => {this.cameras.main.fadeOut(1500)});     
    }       
  }    
}
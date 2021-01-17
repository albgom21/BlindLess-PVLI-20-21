import Collet from './collet.js';
import dialogos from './dialogos.js';
import Inventario from './inventario.js';

export default class Casa2cp extends Phaser.Scene { 
  constructor() {
    super({ key: 'casa2cp'});
    this.pointScene = 0;
    this.menuActivado = false;  
    this.fin = new Array(1); // array con el número de personajes  
    this.key = 'casa2cp';    
    this.nums = [];
  }
  init(datos){
    this.vidaMax = datos.vidaMax;
  }
  create() {  // Refactorizar diálogos y escena      
    this.cameras.main.fadeIn(1500); 
    this.scene.stop('mapa');
    this.nameScene = 'CASA';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'casa');         
    this.madame = new Collet(this, 500, 400, 'madamcuerpo', dialogos.mcCasa2cp, 0); 
    this.cameras.main.once('camerafadeoutcomplete', () => {    
       this.scene.launch('mapa',{antEscena:this.key,proxEscena:'ministerio3casa',nombreEscena:'MINISTERIO',vida:this.vidaMax,suma:2,resta:14});     
      });
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
      

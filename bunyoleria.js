import Latino from './latino.js';
import dialogos from './dialogos.js';
export default class Bunyoleria extends Phaser.Scene {
  
  constructor() {
    super({ key: 'bunyoleria'});    
    this.menuActivado = false;   
    this.pointScene = 0;
    this.fin = new Array(1); // array con el número de personajes  
    this.key = 'bunyoleria';    
    this.nums = [];
  }
  create() {  // Refactorizar diálogos y escena      
    this.cameras.main.fadeIn(1500); 
    this.scene.stop('mapa');
    this.nameScene = 'BUÑOLERíA';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'bunyoleria');         
    this.latCuerpo = new Latino(this, 400, 500, 'latcuerpo', dialogos.dBunyols, 0);
    this.cameras.main.once('camerafadeoutcomplete', () => {
       if (this.pointScene > 10)this.scene.launch('mapa',{antEscena:this.key, proxEscena:'callegormada', nombreEscena: 'CALLE', vida:this.vidaMax, suma: 0, resta: 7});
       else  this.scene.launch('mapa',{antEscena:this.key,proxEscena:'ministerio2',nombreEscena:'MINISTERIO',vida:this.vidaMax,suma:0 ,resta:3});
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
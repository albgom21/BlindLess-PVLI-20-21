import dialogos from './dialogos.js';
import Mateo from './mateo.js';
export default class Bunyoleria extends Phaser.Scene {
  
  constructor() {
    super({ key: 'calabozo'});    
    this.menuActivado = false;   
    this.fin = new Array(1); // array con el número de personajes  
    this.key = 'calabozo';    
    this.nums = [];
  }
  create() {  // Refactorizar diálogos y escena      
    this.cameras.main.fadeIn(1500); 
    this.scene.stop('mapa');
    this.nameScene = 'CALABOZO';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'calabozo');         
    this.mateo = new Mateo(this, 400, 400, 'mateocuerpo', dialogos.calabozo, 0);
    this.cameras.main.once('camerafadeoutcomplete', () => {
       this.scene.launch('mapa',{antEscena:this.key, proxEscena:'ministerio3', nombreEscena: 'MINISTERIO', vida:this.vidaMax, suma: 5, resta: 7});
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
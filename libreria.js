import Zaratustra from './zaratustra.js';
import dialogos from './dialogos.js';
import Latino from './latino.js';
export default class Libreria extends Phaser.Scene {  
    constructor() {
      super({ key: "libreria" });      
    this.pointScene = 0;
    this.menuActivado = false;    
    this.fin = new Array(1); // array con el numero de personajes    
    this.key = 'libreria';
    }
    init(datos){
      this.vidaMax = datos.vidaMax;
    }
    
  create(){
    this.cameras.main.fadeIn(1500); 
    this.scene.stop('mapa');
    this.nameScene = 'LIBRERIA';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'libreria');
  
    this.zarCuerpo = new Zaratustra(this, 1000, 400, 'zaratustracuerpo', dialogos.zarLibreria, 0);  
    //this.latCuerpo = new Latino(this, 500, 400, 'latcuerpo', dialogos, 1);        
    this.add.image(500, 400, 'latcuerpo');

    this.cameras.main.once('camerafadeoutcomplete', () => {
      this.scene.launch('mapa', {antEscena:this.key, proxEscena:'taberna1', nombreEscena:'TABERNA', vida:this.vidaMax, suma:10, resta:7})
  });
  }
  finEscena(){    
    let a = true;
    let i = 0;
    while(a && i<this.fin.length){
      if (this.fin[i]) i++;
      else a = false;
    }
    if(a)
    { //que hayan hablado todos los personajes de la escena
      a = false;
      const botonEscena = this.add.image(1175, 100, 'botonescena').setInteractive();
      botonEscena.once('pointerdown', () => {this.cameras.main.fadeOut(1500)});          
    }       
  }  
}

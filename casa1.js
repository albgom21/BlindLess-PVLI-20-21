import Latino from './latino.js';
import Gafas from './gafas.js';
import Collet from './collet.js';
import dialogos from './dialogos.js';
export default class Casa1 extends Phaser.Scene {
  
  constructor() {
    super({ key: 'casa1'});    
    this.vidaMax = 100;
    this.pointScene = 0;
    this.menuActivado = false;   
    this.apareceLatino = false;
    this.fin = new Array(2); // array con el numero de personajes  
    this.key = 'casa1';    
  }
  create() {  //Refactorizar dialogos y escena
    this.scene.stop('inicio');
    this.nameScene = 'CASA';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'casa');         
    this.madame = new Collet(this, 500, 400, 'madamcuerpo', dialogos.mcCasa1, 0,true);       
    this.g = new Gafas(this, 733, 350, 'Gafas', dialogos.gafasCasa1, dialogos.gafasDCasa1);    
    const contxt = this.add.image(640, 360, 'contexto').setInteractive();       
    contxt.on('pointerdown', () => {contxt.visible = false});    
  }  

aparece(){     
  this.latCuerpo = new Latino(this, 1000, 400, 'latcuerpo', dialogos.latCasa1, 1);    
}
  finEscena(){    
    let a = true ;
    let i = 0;
    while(a && i<this.fin.length){
      if (this.fin[i]) i++;
      else a = false;
    }
    if(a) { //Que hayan hablado todos los personajes de la escena
      a = false;
      let botonEscena = this.add.image(1175, 100, 'botonescena').setInteractive();
      if(this.pointScene >= 10){
        botonEscena.on('pointerdown', () => {this.scene.launch('mapa',{antEscena:this.key,proxEscena:'libreria',nombreEscena:'LIBRERIA',vida:this.vidaMax,suma:2,resta:14})});
      }
      else{
        botonEscena.on('pointerdown', () => {this.scene.launch('mapa',{antEscena:this.key,proxEscena:'calle1',nombreEscena:'CALLE',vida:this.vidaMax,suma:4,resta:11})});
      }      
    }       
  }  
}
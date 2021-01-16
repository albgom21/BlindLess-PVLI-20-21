import Latino from './latino.js';
import Gafas from './gafas.js';
import Collet from './collet.js';
import dialogos from './dialogos.js';
import Loteria from './loteria.js';
import Inventario from './inventario.js';
import Tickets from './tickets.js';
export default class Casa1 extends Phaser.Scene {
  
  constructor() {
    super({ key: 'casa1'});    
    this.vidaMax = 100;
    this.pointScene = 0;
    this.menuActivado = false;   
    this.apareceLatino = false;
    this.fin = new Array(2); // array con el número de personajes  
    this.key = 'casa1';    
    this.nums = [];
  }
  create() {  // Refactorizar diálogos y escena       
    this.scene.stop('inicio');
    this.nameScene = 'CASA';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'casa');         
    this.madame = new Collet(this, 500, 400, 'madamcuerpo', dialogos.mcCasa1, 0, true);       
    this.g = new Gafas(this, 733, 350, 'Gafas', dialogos.gafasCasa1, dialogos.gafasDCasa1);    
    const contxt = this.add.image(640, 360, 'contexto').setInteractive();   
    this.botonT = new Loteria(this, 1230, 670, 'botonTicket');
    this.botonT.visible = false;  
    contxt.on('pointerdown', () => {contxt.visible = false; this.botonT.visible = true;});  
    this.botonT.on('pointerdown', () => {
      this.nums.push(this.botonT.crearNumero());
      this.ticket = new Tickets(this, 150, 300, this.nums[0]);
      this.scene.launch('inventario');
    }) 
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
      if(this.pointScene >= 10){
        botonEscena.on('pointerdown', () => {this.scene.launch('mapa',{antEscena:this.key,proxEscena:'libreria',nombreEscena:'LIBRERIA',vida:this.vidaMax,suma:2,resta:14})});
      }
      else{
        botonEscena.on('pointerdown', () => {this.scene.launch('mapa',{antEscena:this.key,proxEscena:'calle1',nombreEscena:'CALLE',vida:this.vidaMax,suma:4,resta:11})});
      }      
    }       
  }  

  
}
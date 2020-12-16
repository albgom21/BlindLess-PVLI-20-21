import Latino from './latino.js';
import Loteria from './loteria.js';
import Gafas from './gafas.js';
export default class Game extends Phaser.Scene {
  
  constructor() {
    super({ key: 'game'});    
    this.vidaMax = 100;
    this.pointScene = 0;
    this.menuActivado = false;
    this.fin = new Array(1); // array con el numero de personajes
    this.fin[0]= false;
    
  }
  create() {
    this.scene.stop('inicio');
    this.nameScene = 'CASA';
    this.add.image(640,360,'fondoShakeDanyo'); 
    this.add.image(640,360,'fondo'); 
        
    var dialogos = new Array();
    dialogos.push({texto: 'funciona', answer: null});
    dialogos.push({texto: 'funciona2',
      answer: [{texto: 'si', puntos: 10, life: 0, jump: 0},
               {texto: 'no', puntos: 0, life: 0, jump: 0},
               {texto: 'no se', puntos: 50, life: -10, jump: 2}]});
    dialogos.push({texto: 'funciona', answer: null});
    dialogos.push({texto: 'funciona salto', answer: null});
    dialogos.push({texto: 'funciona Salto2', answer: null});
    this.latCuerpo = new Latino(this, 1000,400,'latcuerpo', dialogos, 0);
    //this.gafas = new Personaje(this, 733, 350, 'gafas');  //No pueden crearse a partir de la clase que heredan
    dialogos = new Array();
    dialogos.push({texto: 'funciona\nhola', answer: null});
    var dialogoDef = new Array();
    dialogoDef.push({texto: 's\nhola', answer: null})
    dialogoDef.push({texto: 's\nadios', answer: null})
    this.g = new Gafas(this,733,350,'Gafas', dialogos, dialogoDef);
    //this.botella = new Personaje(this, 300, 264, 'botella');  // hacer clases que hereden de Personaje
   // this.corazon = new Personaje(this, 1230, 655, 'corazon');
   // this.boton = new Loteria(this, 60, 655, 'botont');
   // this.ticket = new Loteria(this, 400, 500, 'loteria');

    //this.latCuerpo.on('pointerdown', () => {this.aparece()});   
    //this.gafas.on('pointerdown', () => {this.gafas.restaVida()});
    //this.botella.on('pointerdown', () => {this.gafas.aumentaVida()});
    //this.corazon.on('pointerdown', () => {this.gafas.mostrarVida()});
    //this.boton.on('pointerdown', () => {this.ticket.verNumeros()});
    //this.ticket.on('pointerdown', () => {this.ticket.crearNumero()});       
  }  

  finEscena(){    
    var a;
    for(const n of this.fin){
      if (!n) a = false;
      else a = true;
    }  
    if(a)
    { //que hayan hablado todos los personajes de la escena     
      a = false;
      const botonEscena = this.add.image(1175,100,'botonescena').setInteractive();
       botonEscena.on('pointerdown', () => {this.scene.launch('mapa')});  //Poner los parametros
    }    
  } 
  
}

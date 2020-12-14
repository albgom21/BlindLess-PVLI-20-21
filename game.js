import Personaje from './personaje.js';
import Latino from './latino.js';
import Loteria from './loteria.js';
import Gafas from './gafas.js';
export default class Game extends Phaser.Scene {
  
  constructor() {
    super({ key: 'game'});    
    this.vidaMax = 100;
    this.menuActivado = false;
  }

  preload() {
    this.load.image('fondo','sprites/fondo.png')
    this.load.image('Max','sprites/Max.png' );
    this.load.image('sillon','sprites/sillon.png');
    this.load.image('Latino','sprites/Latino.png');
    this.load.image('latcuerpo','sprites/latcuerpo.png');

    this.load.image('lugar','sprites/lugar.png');
    this.load.image('boton','sprites/boton.png');
    this.load.image('boton2','sprites/boton2.png');
    this.load.image('botonGastado','sprites/botonGastado.png');
    this.load.image('respuesta','sprites/respuesta.png');
    this.load.image('respuesta2','sprites/respuesta2.png');
    this.load.image('dialogofondo','sprites/dialogofondo.png');
    this.load.image('fondonombre','sprites/fondonombre.png');

    this.load.image('botont', 'sprites/botontickets.png');
    this.load.image('loteria','sprites/ticket.png');
    this.load.image('botella', 'sprites/botella.png');
    this.load.image('gafas', 'sprites/gafas.png');
    this.load.image('corazon', 'sprites/corazon.png');
    
  }

  create() {      
    this.nameScene = 'CASA';
    this.add.image(640,360,'fondo'); 
        
    var dialogos = new Array();
    dialogos.push({texto: 'funciona', answer: null});
    dialogos.push({texto: 'funciona2',
      answer: [{texto: 'si', puntos: 10},
               {texto: 'no', puntos: 0},
               {texto: 'no se', puntos: 50}]});
    this.latCuerpo = new Latino(this, 1000,400,'latcuerpo', dialogos);
    //this.gafas = new Personaje(this, 733, 350, 'gafas');  //No pueden crearse a partir de la clase que heredan
    this.g = new Gafas(this,733,350,'gafas');
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
  update(time, delta) {}

  //UI
  //aparece(){        
    
    //this.add.image(1125,575,'latino');  
    //this.add.image(150,575,'max');      
  //}
}
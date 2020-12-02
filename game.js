import MyObject from './myobject.js';
import Sillon from './sillon.js';
import Loteria from './loteria.js';
export default class Game extends Phaser.Scene {
  
  constructor() {
    super({ key: 'game'});    
  }

  preload() {
    this.load.image('fondo','sprites/fondo.png')
    this.load.image('max','sprites/max.png' );
    this.load.image('sillon','sprites/sillon.png');
    this.load.image('latino','sprites/latino.png');
    this.load.image('latcuerpo','sprites/latcuerpo.png');

    this.load.image('botont', 'sprites/botontickets.png');
    this.load.image('loteria','sprites/ticket.png');
    this.load.image('botella', 'sprites/botella.png');
    this.load.image('gafas', 'sprites/gafas.png');
    this.load.image('corazon', 'sprites/corazon.png');
    
  }

  create() {      

    this.add.image(640,360,'fondo');   

    this.s = new Sillon(this,600,200);  
    
    this.latCuerpo = new MyObject(this, 1000,400,'latcuerpo'); 
    this.gafas = new MyObject(this, 733, 350, 'gafas');
    this.botella = new MyObject(this, 300, 264, 'botella');
    this.corazon = new MyObject(this, 1230, 655, 'corazon');
    this.boton = new Loteria(this, 60, 655, 'botont');
    this.ticket = new Loteria(this, 400, 500, 'loteria');

    this.latCuerpo.on('pointerdown', () => {this.aparece()});   
    this.gafas.on('pointerdown', () => {this.gafas.restaVida()});
    this.botella.on('pointerdown', () => {this.gafas.aumentaVida()});
    this.corazon.on('pointerdown', () => {this.gafas.mostrarVida()});
    this.boton.on('pointerdown', () => {this.ticket.verNumeros()});
    this.ticket.on('pointerdown', () => {this.ticket.crearNumero()});
  }  
  update(time, delta) {}

  //UI
  //aparece(){        
    
    //this.add.image(1125,575,'latino');  
    //this.add.image(150,575,'max');      
  //}
}
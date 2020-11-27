import MyObject from './myobject.js';
import Sillon from './sillon.js';
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
  }

  create() {      
    this.add.image(640,360,'fondo');   
    this.s = new Sillon(this,500,400);  
    
    this.latCuerpo = new MyObject(this, 1000,400,'latcuerpo'); 
    this.latCuerpo.on('pointerdown', () => {this.aparece()});      
    
  }  
  update(time, delta) {}
aparece(){
  this.latCuerpo.setTexture('max');
}
  //UI
  //aparece(){        
    
    //this.add.image(1125,575,'latino');  
    //this.add.image(150,575,'max');      
  //}
}
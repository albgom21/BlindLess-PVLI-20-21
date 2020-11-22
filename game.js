import Object from './object.js';
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
    this.latCuerpo = new Object(this, 1000,400,'latcuerpo');
    this.latCuerpo.setInteractive();
    this.latCuerpo.on('pointerdown', () => {this.aparece()});        
  }  
  update(time, delta) {}

  aparece(){
    this.add.image(1125,575,'latino');  
    this.add.image(150,575,'max');      
  }
}
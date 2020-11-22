import Object from './object.js';
export default class Game extends Phaser.Scene {
  
  constructor() {
    super({ key: 'game'});
  }
  preload() {
    this.load.image('fondo','sprites/fondo.png')
    this.load.image('max','sprites/max.png' );
    this.load.image('sillon','sprites/sillon.png');
    this.load.image('latino','sprites/latino.png' );
  }

  create() {  
    this.add.image(640,360,'fondo');     
    this.Max = new Object(this,150,575,'max');       
    this.Latino = new Object(this,1125,575,'latino');  
    this.Sillon = new Object(this,500,525,'sillon');   
    this.Sillon.setScale(0.25);
  }  
  update(time, delta) {}
}

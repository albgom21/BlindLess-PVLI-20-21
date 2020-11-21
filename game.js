import Object from './object.js';
export default class Game extends Phaser.Scene {
  
  constructor() {
    super({ key: "main" });
  }
  preload() {
    this.load.image('fondo','sprites/fondo.jpg')
    this.load.image('max','sprites/max.png' );
    this.load.image('sillon','sprites/sillon.png');
  }

  create() {  
    this.add.image(640,360,'fondo');     
    const max = this.add.sprite(150,525,'max');   
    max.setScale(0.5);
    this.Sillon = new Object(this,500,525,'sillon');   
    this.Sillon.setScale(0.25);
  }  
  update(time, delta) {}
}

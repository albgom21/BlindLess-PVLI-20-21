export default class Inicio extends Phaser.Scene {
  
  constructor() {
    super({ key: "inicio" });    
  }

  preload() {
    this.load.image('inicio','sprites/inicio.png');   
  }

  create() {         
    const s = this.add.image(640,360,'inicio'); 
    s.setInteractive();
    s.on('pointerdown', () => {this.scene.start('game')});    
  }
}
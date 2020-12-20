export default class Inicio extends Phaser.Scene {  
  constructor() {
    super({ key: "inicio" });    
  }
  create() {
    const inicio = this.add.image(640,360,'inicio').setInteractive();      
    inicio.on('pointerdown', () => {this.scene.launch('casa1')});    
  }
}
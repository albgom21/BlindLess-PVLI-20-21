export default class Inicio extends Phaser.Scene {  
  constructor() {
    super({ key: "inicio" });    
  }
  create() {    
    const inicio = this.add.image(640,360,'inicio').setInteractive();      
    this.cameras.main.once('camerafadeoutcomplete', () => {this.scene.launch('casa1')});
    inicio.once('pointerdown', () => {this.cameras.main.fadeOut(250)});    
  }
}
export default class Libreria extends Phaser.Scene {  
    constructor() {
      super({ key: "libreria" });
    }
    
  create(){
      const libreria = this.add.image(640, 360, 'libreria').setInteractive();
      libreria.on('pointerdown', () => {this.scene.launch(this.proxEscena)});
  }
}

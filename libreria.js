export default class Libreria extends Phaser.Scene {  
    constructor() {
      super({ key: "libreria" });
    }
    
  create(){
    this.scene.stop('mapa');
      const libreria = this.add.image(640, 360, 'libreria').setInteractive();
      //libreria.on('pointerdown', () => {this.scene.launch(this.proxEscena)});
  }
}

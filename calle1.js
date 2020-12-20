export default class Calle1 extends Phaser.Scene {  
    constructor() {
      super({ key: "calle1" });
    }
    
  create(){
    this.scene.stop('mapa');
      const libreria = this.add.image(640, 360, 'calle').setInteractive();
      //libreria.on('pointerdown', () => {this.scene.launch(this.proxEscena)});
  }
}

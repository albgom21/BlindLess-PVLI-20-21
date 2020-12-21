export default class Calle1 extends Phaser.Scene {  
    constructor() {
      super({ key: "calle1" });
    }
    
  create(){
    this.scene.stop('mapa');
     this.add.image(640, 360, 'calle');
     this.add.image(400, 400, 'latcuerpo');
  }
}

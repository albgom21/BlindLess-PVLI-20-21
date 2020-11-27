export default class Ui extends Phaser.Scene {  
  constructor() {
    super({ key: "ui" });    
    //pasarle sprites con init
    //poner launch en lugar de run (duda del campus)
  }
  preload() {
    this.load.image('max','sprites/max.png' );
    this.load.image('latino','sprites/latino.png');
  }

  create() {         
    this.add.image(150,575,'max'); 
    this.add.image(1125,575,'latino');      
  }
}
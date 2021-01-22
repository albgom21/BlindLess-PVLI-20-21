export default class Fin extends Phaser.Scene {  
  constructor() {
    super({ key: "fin" });    
  }
  create() {    
    this.musicafin = this.sound.add("ganarminijuego",{volume: 0.15,loop: true});
    this.musicafin.play();
    this.cameras.main.fadeIn(1500);
    this.add.image(640,360,'fin');          
  }
}
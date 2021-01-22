export default class Coleccionables extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, image) {
      super(scene, x, y, image);    
      this.scene = scene;
      this.scene.add.existing(this);
      this.setInteractive();
      this.on('pointerdown', () => { 
          this.sonido = this.scene.sound.add("sonidocoleccionable",{volume: 1});
          this.sonido.play();
          this.scene.datosInventario.coleccionables++;
          this.destroy();
        }
      );
    }
}
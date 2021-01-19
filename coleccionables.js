export default class Coleccionables extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, image) {
      super(scene, x, y, image);    
      this.scene = scene;
      this.scene.add.existing(this);
      this.setInteractive();
      this.on('pointerdown', () => {
          this.scene.coleccionables++;
          this.destroy();
        }
      );
    }
}
      
    
  
  
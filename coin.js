export default class Coin extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);    
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);    
  }
  preUpdate(t,d) {
    this.play('c',true);
    super.preUpdate(t,d);    
    if (this.scene.physics.overlap(this.scene.player, this)) {
      this.scene.player.updateScore();    
      this.ganarmonedas = this.scene.sound.add("ganarmonedas",{volume: 0.05});
      this.ganarmonedas.play();
      this.destroy();     
    }
  }
}
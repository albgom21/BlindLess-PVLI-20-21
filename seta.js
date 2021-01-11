export default class Seta extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'm');
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this,false);
   // this.body.setCollideWorldBounds();
    //new Base(scene, this, x, y, baseGroup);
    this.scene.physics.add.collider(this);

    this.body.setImmovable(true);
    this.body.allowGravity = false;
    this.body.setVelocityX(75);
  }
  preUpdate() {
    if (this.scene.physics.overlap(this.scene.player, this)) {
      this.scene.player.seta();      
      this.destroy();
    }
    
    if(this.x > 1320){
        this.destroy();
    }
    
  }
}

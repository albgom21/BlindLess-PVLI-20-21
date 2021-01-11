export default class Spike extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, player) {
    super(scene, x, y,'spike');   
    this.setScale(0.5); 
    this.setSize(this.width/2,this.height/2)
    this.player = player;
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
      this.scene.fin = true;
      this.player.destroy();     
    }   
    if(this.x > 1320){
      this.destroy();      
    }
  }
}

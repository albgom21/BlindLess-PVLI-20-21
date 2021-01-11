export default class Platform extends Phaser.GameObjects.Sprite {
  constructor(scene, player, x, y) {
    super(scene, x, y, 'plat');
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this,false);
   // this.body.setCollideWorldBounds();
    //new Base(scene, this, x, y, baseGroup);
    this.scene.physics.add.collider(this, player);

    this.body.setImmovable(true);
    this.body.allowGravity = false;
    this.body.setVelocityX(75);
    
    /*this.trigger = this.scene.add.zone(500, 400);
    this.trigger.setSize(200, 200);
    this.scene.physics.world.enable(this.trigger);
    this.trigger.body.setAllowGravity(false);
    this.trigger.body.moves = false;
    this.scene.physics.add.overlap(this.trigger, player, (o1, o2) => {console.log("a")});*/
  }
  preUpdate(t,d) { 
    if(this.x > 1320){
      this.destroy();
    }
  }
}

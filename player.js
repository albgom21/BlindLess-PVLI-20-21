export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y,'mujer');
    //this.setScale(2);
    //this.setSize(40, 50);
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.speed = 300;
    this.jumpSpeed = -450;
    this.label = this.scene.add.text(15, 15,'Score: ' + this.score ,{ fontFamily: 'VT323',fontSize: '26px', color: '#281501' });
    this.cursors = this.scene.input.keyboard.createCursorKeys();    
    this.w = scene.input.keyboard.addKey('W');
    this.a = scene.input.keyboard.addKey('A');
    this.d = scene.input.keyboard.addKey('D');
    this.setas = false;
  }
  
  seta(){
    this.setas = true;  
    this.scene.ui();  
  }
  updateScore() {
    this.score++;
    this.label.text = 'Score: ' + this.score;
  }   

  preUpdate(t,d) {    
    super.preUpdate(t,d);         
    if(!this.scene.stop){   
      if ((Phaser.Input.Keyboard.JustDown(this.w) || (Phaser.Input.Keyboard.JustDown(this.cursors.up))) && this.body.velocity.y === 0 && !this.body.onCollide) {
        if(this.setas){
          this.body.setVelocityY(this.jumpSpeed*2);
          this.setas = false;
          this.scene.ui();  
        }
        else{
          this.body.setVelocityY(this.jumpSpeed);
        }     
        this.play('jump',false);  
        this.anims.chain('idle');
      }        
      if ((this.a.isDown || this.cursors.left.isDown)) {
        this.body.setVelocityX(-this.speed);
        this.setFlip(true,0);
        this.play('walk',true);        
      }
      else if (this.d.isDown || this.cursors.right.isDown) {
        this.body.setVelocityX(this.speed);
        this.setFlip(false,0);
        this.play('walk',true);
      }
      else {
        this.body.setVelocityX(0);
        if (this.anims.getCurrentKey() !== 'jump') {
          this.play('idle',true);
        }       
      }
    }
    else{
      this.body.setVelocityX(0);
      this.play('idle',true);
    }
    }    
}
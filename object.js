export default class Object extends Phaser.GameObjects.Sprite {
  constructor(scene,x,y,image) {
    super(scene,x,y,image);

    scene.add.existing(this);
    this.setInteractive();    
    this.on('pointerdown', () => {this.menu()});    
  }  
   menu(){
    alert('Menú hablar');    
  }
}

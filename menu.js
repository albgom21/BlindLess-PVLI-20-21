export default class Menu extends Phaser.GameObjects.Container {
  constructor(scene, x, y, fontColor, key1, key2, personaje) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;

    const button = this.scene.add.image(x, y, key1).setInteractive();
    const buttonText = this.scene.add.text(x, y, 'HABLAR', {fontSize:'26px', color: fontColor});
    Phaser.Display.Align.In.Center(buttonText, button);
    this.add(button);
    this.add(buttonText);
    button.on('pointerdown', () => {      
      personaje.hablar();
    });   
    button.on('pointerover',() =>{
      button.setTexture(key2);
    }) 
    button.on('pointerout', () => {
      button.setTexture(key1);
    });

    const button2 = this.scene.add.image(x, y+50,key1).setInteractive();
    const buttonText2 = this.scene.add.text(x, y+50,'DEFORMAR', {fontSize:'26px', color: fontColor});
    Phaser.Display.Align.In.Center(buttonText2, button2);
    this.add(button2);
    this.add(buttonText2);
    button2.on('pointerdown', () => {      
      personaje.deformar();
    });   
    button2.on('pointerover',() =>{
      button2.setTexture(key2);
    }) 
    button2.on('pointerout', () => {
      button2.setTexture(key1);
    });

    const button3 = this.scene.add.image(x, y+100,key1).setInteractive();
    const buttonText3 = this.scene.add.text(x, y+100,'SALIR', {fontSize:'26px', color: fontColor});
    Phaser.Display.Align.In.Center(buttonText3, button3);
    this.add(button3);
    this.add(buttonText3);
    button3.on('pointerdown', () => {      
      personaje.salir();
    });   
    button3.on('pointerover',() =>{
      button3.setTexture(key2);
    }) 
    button3.on('pointerout', () => {
      button3.setTexture(key1);
    });

    this.scene.add.existing(this);   
  }
}
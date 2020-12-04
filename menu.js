export default class Menu extends Phaser.GameObjects.Container {
  constructor(scene, x, y, fontColor,d,personaje) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    const key1 = 'boton';
    const key2 = 'boton2';

    if(d===true){
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
  
      
    }
    else{
      const button4 = this.scene.add.image(x, y, key1).setInteractive();
      const buttonText4 = this.scene.add.text(x, y, 'HABLAR', {fontSize:'26px', color: fontColor});
      Phaser.Display.Align.In.Center(buttonText4, button4);
      this.add(button4);
      this.add(buttonText4);
      button4.on('pointerdown', () => {      
        personaje.hablar();
      });   
      button4.on('pointerover',() =>{
        button4.setTexture(key2);
      }) 
      button4.on('pointerout', () => {
        button4.setTexture(key1);
      });
  
      const button5 = this.scene.add.image(x, y+50,key1).setInteractive();
      const buttonText5 = this.scene.add.text(x, y+50,'SALIR', {fontSize:'26px', color: fontColor});
      Phaser.Display.Align.In.Center(buttonText5, button5);
      this.add(button5);
      this.add(buttonText5);
      button5.on('pointerdown', () => {      
        personaje.deformar();
      });   
      button5.on('pointerover',() =>{
        button5.setTexture(key2);
      }) 
      button5.on('pointerout', () => {
        button5.setTexture(key1);
      });
    }
    this.scene.add.existing(this);   
  }
    
}
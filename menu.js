export default class Menu extends Phaser.GameObjects.Container {
  constructor(scene, x, y, fontColor,d,personaje) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    const key1 = 'boton';
    const key2 = 'boton2';

    if(d===true){     
      this.newButton('HABLAR',x, y,0, key1, fontColor, personaje, key2);
      this.newButton('DEFORMAR',x, y,50, key1, fontColor, personaje, key2);
      this.newButton('SALIR',x, y,100, key1, fontColor, personaje, key2);       
    }
    else{
      this.newButton('HABLAR',x, y,0, key1, fontColor, personaje, key2);
      this.newButton('SALIR',x, y,50, key1, fontColor, personaje, key2);}
    this.scene.add.existing(this);   
  }
    
  // Método que crea un nuevo botón
  newButton(texto, x, y, espacio, key1, fontColor, personaje, key2) {
    const button = this.scene.add.image(x, y + espacio, key1).setInteractive();
    const buttonText = this.scene.add.text(x, y + espacio, texto, { fontSize: '26px', color: fontColor });
    Phaser.Display.Align.In.Center(buttonText, button);
    this.add(button);
    this.add(buttonText);
    
    button.on('pointerdown', () => {  //Preguntar si hay una forma mejor de decidir que hace el botón
      if(texto === 'HABLAR'){
        personaje.hablar();
      }
      else if(texto === 'DEFORMAR'){
        personaje.deformar();
      }
      else if(texto === 'SALIR'){
        personaje.salir();
      }
    });
    button.on('pointerover', () => {
      button.setTexture(key2);
    });
    button.on('pointerout', () => {
      button.setTexture(key1);
    });
  }
}
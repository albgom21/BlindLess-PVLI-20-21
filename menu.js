export default class Menu extends Phaser.GameObjects.Container {
  constructor(scene, x, y, fontColor,d,personaje) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    const key1 = 'boton';
    const key2 = 'boton2';

    if(d){
      this.newButton(()=>{personaje.hablar()},'HABLAR',x, y,0, key1, fontColor, key2);
      this.newButton(()=>{personaje.deformar();},'DEFORMAR',x, y,50, key1, fontColor, key2);
      this.newButton(()=>{personaje.salir();},'SALIR',x, y,100, key1, fontColor, key2);
    }
    else{
      this.newButton(()=>{personaje.hablar();},'HABLAR',x, y,0, key1, fontColor, key2);
      this.newButton(()=>{personaje.salir();},'SALIR',x, y,50, key1, fontColor, key2);}
    this.scene.add.existing(this);
  }

  // Método que crea un nuevo botón
  newButton(f,texto, x, y, espacio, key1, fontColor, key2) {
    const button = this.scene.add.image(x, y + espacio, key1).setInteractive();
    const buttonText = this.scene.add.text(x, y + espacio, texto, { fontFamily: 'Press Start 2P',fontSize: '26px', color: fontColor });
    Phaser.Display.Align.In.Center(buttonText, button);
    this.add(button);
    this.add(buttonText);

    button.on('pointerdown', () => {  //Preguntar si hay una forma mejor de decidir que hace el botón
      f();
    });
    button.on('pointerover', () => {
      button.setTexture(key2);
    });
    button.on('pointerout', () => {
      button.setTexture(key1);
    });
  }
}
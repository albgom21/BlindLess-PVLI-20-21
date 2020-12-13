export default class Menu extends Phaser.GameObjects.Container {
  constructor(scene, x, y, fontColor,d,personaje) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.button = new Array();

    if(d){
      this.newButton(()=>{personaje.hablar()},'HABLAR',x, y, 0, fontColor, 0);
      this.newButton(()=>{personaje.deformar();},'DEFORMAR',x, y, 50, fontColor, 1);
      this.newButton(()=>{personaje.salir();},'SALIR',x, y, 100, fontColor, 2);
    }
    else{
      this.newButton(()=>{personaje.hablar();},'HABLAR',x, y, 0, fontColor, 0);
      this.newButton(()=>{personaje.salir();},'SALIR',x, y, 50, fontColor, 2);}
    this.scene.add.existing(this);
  }

  // Método que crea un nuevo botón
  newButton(f,texto, x, y, espacio, fontColor, i) {
    this.button[i] = this.scene.add.image(x, y + espacio, 'boton').setInteractive();
    const buttonText = this.scene.add.text(x, y + espacio, texto, { fontFamily: 'VT323',fontSize: '26px', color: fontColor });
    Phaser.Display.Align.In.Center(buttonText, this.button[i]);
    this.add(this.button[i]);
    this.add(buttonText);

    this.button[i].on('pointerdown', () => {
      f();
    });
    this.button[i].on('pointerover', () => {
      this.button[i].setTexture('boton2');
    });
    this.button[i].on('pointerout', () => {
      this.button[i].setTexture('boton');
    });
  }

  botonGastado(i){ // Falta cambiarlo
    this.button[i].on('pointerover', () => {
      this.button[i].setTexture('botonGastado');
    });
    this.button[i].on('pointerout', () => {
      this.button[i].setTexture('botonGastado');
    });
  }
}
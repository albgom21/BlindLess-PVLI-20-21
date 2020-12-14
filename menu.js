export default class Menu extends Phaser.GameObjects.Container {
  constructor(scene, x, y, fontColor,d,personaje) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.button = new Array();
    this.botonGastadoH = false;
    this.botonGastadoD = false;
    this.personaje = personaje;

    if(d){
      this.newButton(()=>{personaje.hablar()},'HABLAR',x, y, 0, fontColor, 0);
      this.newButton(()=>{personaje.deformar();},'DEFORMAR',x, y, 50, fontColor, 1);
      this.newButton(undefined,'SALIR',x, y, 100, fontColor, 2);
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
      if(!this.botonGastadoH && i === 0) f();
      else if(!this.botonGastadoD && i === 1) f();
      else this.personaje.salir();
    });
    this.button[i].on('pointerover', () => {
      if(!this.botonGastadoH && i === 0) this.button[i].setTexture('boton2');
      else if(!this.botonGastadoD && i === 1) this.button[i].setTexture('boton2');
      else if(i===2) this.button[i].setTexture('boton2');
    });
    this.button[i].on('pointerout', () => {
      if(!this.botonGastadoH && i === 0) this.button[i].setTexture('boton');
      else if(!this.botonGastadoD && i === 1) this.button[i].setTexture('boton');
      else if(i===2) this.button[i].setTexture('boton');
    });
  }

  buttonGastado(i){ // Falta cambiarlo
    if (i===0)this.botonGastadoH = true;
    else if (i===1){
      this.botonGastadoD = true;
      this.botonGastadoH = false;
      this.button[0].setTexture('boton');
    }
    this.button[i].setTexture('botonGastado');
  }
}
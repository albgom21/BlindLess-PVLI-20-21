export default class Menu extends Phaser.GameObjects.Container {
  constructor(scene, x, y, fontColor,d,personaje) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.button = [];
    this.botonGastadoH = false;
    this.botonGastadoD = false;
    this.personaje = personaje;
    this.deformado = d;

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
    let buttonImage = this.scene.add.image(x,y + espacio, 'boton').setInteractive();
    let buttonText = this.scene.add.text(x, y + espacio, texto, { fontFamily: 'VT323',fontSize: '26px', color: fontColor });
    Phaser.Display.Align.In.Center(buttonText, buttonImage);
    this.add(buttonImage);
    this.add(buttonText);
    this.button[i*2] = {button: buttonImage, myX:buttonImage.x, myY:buttonImage.y};
    this.button[i*2 + 1] = {button: buttonText, myX:buttonText.x, myY:buttonText.y};
    this.button[i*2].button.on('pointerdown', () => {
      this.sonido = this.scene.sound.add("seleccionmenu",{volume: 0.25});
      this.sonido.play();
      if(!this.botonGastadoH && i === 0) f();
      else if(!this.botonGastadoD && i === 1) f();
      else this.personaje.salir();
    });
    this.button[i*2].button.on('pointerover', () => {
      if(!this.botonGastadoH && i === 0) this.button[i*2].button.setTexture('boton2');
      else if(!this.botonGastadoD && i === 1) this.button[i*2].button.setTexture('boton2');
      else if(i===2) this.button[i*2].button.setTexture('boton2');
    });
    this.button[i*2].button.on('pointerout', () => {
      if(!this.botonGastadoH && i === 0) this.button[i*2].button.setTexture('boton');
      else if(!this.botonGastadoD && i === 1) this.button[i*2].button.setTexture('boton');
      else if(i===2) this.button[i*2].button.setTexture('boton');
    });
  }

  buttonGastado(i){ // Falta cambiarlo
    if (i===0) this.botonGastadoH = true;
    else if (i===1){
      this.botonGastadoD = true;
      this.botonGastadoH = false;
      this.button[0].button.setTexture('boton');
    }
    this.button[i*2].button.setTexture('botonGastado');
  }

  animacionMenu(){
    for(let i = 0; i < this.button.length; ++i){
      if(i === 2 && !this.deformado) i = 4;
      this.button[i].button.x = this.personaje.x/2
      this.button[i].button.y = this.personaje.y/2
      this.button[i].button.alpha = 0

      this.scene.tweens.add({
        targets: this.button[i].button,
        duration: 500,
        y: this.button[i].myY,
        x: this.button[i].myX,
        alpha: 1,
        ease: 'Expo'
      })
    }
  }
}
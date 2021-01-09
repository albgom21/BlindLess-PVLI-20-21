import Menu from './menu.js';
export default class Personaje extends Phaser.GameObjects.Container {
  constructor(scene, x, y, image, d, xMenu, yMenu, dialogos, fin,aparece) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.xMenu = xMenu;
    this.yMenu = yMenu;
    this.image = this.scene.add.image(x,y,image).setInteractive();
    this.space = scene.input.keyboard.addKey('SPACE')
    this.m = new Menu(scene, x / 2 + xMenu, y / 2 + yMenu, '#ffff', d, this);  //Poner x e y del personaje
    this.m.visible = false;
    this.f = fin;
    this.aparece = aparece;
    
    const imagenDanyo = this.scene.add.image(640, 360, 'danyo').setVisible(false);
    this.scene.cameras.main.on('camerashakestart', function () {
      imagenDanyo.visible = true;
  });

  this.scene.cameras.main.on('camerashakecomplete', function () {
      imagenDanyo.visible = false;
  });

    this.mensajeDanyo = false;
    this.mensajeSanar = false;

    this.numDial = 0;
    this.estaHablando = false;
    this.dialogos = dialogos;
    this.dialogoAct = undefined;
    this.botones = new Array();

    // Al clicar un objeto, aparecerá el menú si no hay otro visible    
      this.image.on('pointerdown', () => {
        if(!this.scene.menuActivado){
          this.m.visible = true;
          this.scene.menuActivado = true;}
        });      
      this.space.on('down', event => {
        if(this.estaHablando){
          this.numDial++;
          if(this.numDial < this.dialogos.length){
            this.hablarDialogo(this.dialogos[this.numDial]);
          }
          else{
            this.estaHablando = false;
            this.scene.menuActivado = false;  
            this.scene.fin[this.f] = true;  
            if(this.aparece){
              this.scene.aparece();
            }            
            this.scene.finEscena(); 
            this.scene.scene.stop('ui');
          }
        }
      });      
    this.scene.add.existing(this);
  }
    
// Método que ejecuta los diálogos.
  hablar(){        
    this.m.visible = false;
    this.hablarDialogo(this.dialogos[this.numDial]);
    this.m.buttonGastado(0);
    this.estaHablando = true;    
  } 

  // Método que deforma los objetos (aún no hecho). 
  deformar(newImage, dialogo){   
    this.scene.menuActivado = false;    
    this.m.visible = false;
    this.m.buttonGastado(1);
    this.image.destroy();
    this.image = this.scene.add.image(this.x, this.y, newImage).setInteractive();
    this.name = newImage;
    this.image.on('pointerdown', () => {
    if(!this.scene.menuActivado){
      this.m.visible = true;
      this.scene.menuActivado = true;}
    });
    this.numDial = 0;
    this.dialogos = dialogo;
  } 
  salir(){
    this.scene.menuActivado = false;      
    this.scene.scene.stop('ui');
    this.m.visible = false;
  } 

  //Método que resta/suma vida a Max
  cambiaVida(vida,razon){
    if(vida < 0){
      this.dialogos.splice(this.numDial, 0, {texto: ('*Daño: ' + vida + ' de vida debido a ' + razon + '*'), answer: null});
      this.scene.cameras.main.shake(500);
      this.mensajeDanyo = true;
    }
    else if(vida > 0){
      this.dialogos.splice(this.numDial, 0, {texto: ('*Sanado: ' + vida + ' de vida debido a ' + razon + '*'), answer: null});
      this.mensajeSanar = true;
    }
    this.scene.vidaMax += vida;
    if(this.scene.vidaMax < 0)
      this.scene.vidaMax = 0;
    else if(this.scene.vidaMax > 100)
    this.scene.vidaMax = 100;
  } 

  hablarDialogo(dialogo){
    if(dialogo.personaje)
      this.name = dialogo.personaje;
    if(this.dialogoAct !== undefined) this.scene.scene.stop('ui');
    if(this.mensajeDanyo) { 
      this.dialogoAct = this.scene.scene.launch('ui', {p1:'Max', p2:this.name, vida:this.scene.vidaMax,
    name:this.scene.nameScene, texto:dialogo.texto, color: '#ff6060', primerTexto: (this.numDial === 0)});
    this.mensajeDanyo = false;
    }
    else if(this.mensajeSanar){
      this.dialogoAct = this.scene.scene.launch('ui', {p1:'Max', p2:this.name, vida:this.scene.vidaMax,
    name:this.scene.nameScene, texto:dialogo.texto, color: '#51d58a', primerTexto: (this.numDial === 0)});
    this.mensajeSanar = false;
    }
    else {
      this.dialogoAct = this.scene.scene.launch('ui', {p1:'Max', p2:this.name, vida:this.scene.vidaMax,
    name:this.scene.nameScene, texto:dialogo.texto, primerTexto: (this.numDial === 0)});
    }    
    if(dialogo.answer){
      this.estaHablando = false;
      for(let i = 0; i < dialogo.answer.length; i++){
        this.newAnswer(i, dialogo.answer[i]);
      }
      this.animacionRespuestas(this.botones);
    }
    if(dialogo.jump) this.numDial += dialogo.jump;
  }

  newAnswer(i, answer) {
    this.botones[i * 2] = this.scene.add.image(650, 100 + i * 100, 'respuesta').setInteractive();
    this.botones[i * 2 + 1] = this.scene.add.text(650, 100 + i * 100, answer.texto, { fontFamily: 'VT323',fontSize: '26px', color: '#000000' });
    Phaser.Display.Align.In.Center(this.botones[i * 2 + 1], this.botones[i * 2]);

    this.botones[i * 2].on('pointerdown', () => {  
      this.scene.pointScene += answer.points;
      this.cambiaVida(answer.life,answer.razon);
      if(this.numDial < this.dialogos.length){
        if(answer.life === 0) this.numDial += answer.jump + 1; 
        this.hablarDialogo(this.dialogos[this.numDial]);
      }
      else{        
        this.estaHablando = false;
        this.scene.menuActivado = false; 
        this.scene.fin[this.f] = true; 
        this.scene.finEscena();        
        this.scene.scene.stop('ui');
      }
      this.estaHablando = true;
      if(answer.life !== 0) this.numDial += answer.jump + 1;            
        
      for(const n of this.botones){
        n.visible = false;
      }
    });
    this.botones[i * 2].on('pointerover', () => {
      this.botones[i * 2].setTexture('respuesta2');
    });
    this.botones[i * 2].on('pointerout', () => {
      this.botones[i * 2].setTexture('respuesta');
    });
  }

  animacionRespuestas(objects, start = true){
    for(let i =0; i < objects.length; ++i){
      let value = 50;
      let imgAlpha = 0
      objects[i].y += value
      objects[i].alpha = 0
      imgAlpha = 1
      value *= -1
  
      this.scene.tweens.add({
          targets: objects[i],
          duration: 350,
          y: objects[i].y + value,
          alpha: imgAlpha,
          ease: 'Circ',
          onComplete: () => { if (!start) objects[i].y -= value }
      })
    }
  }
}
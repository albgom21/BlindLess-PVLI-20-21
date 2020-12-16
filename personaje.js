import Menu from './menu.js';
export default class Personaje extends Phaser.GameObjects.Container {
  constructor(scene,x,y,image,d,xMenu,yMenu, dialogos) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.xMenu = xMenu;
    this.yMenu = yMenu;
    this.image = this.scene.add.image(x,y,image).setInteractive();
    this.space = scene.input.keyboard.addKey('SPACE')
    this.m = new Menu(scene,x/2 + xMenu,y/2 + yMenu,'#ffff',d,this);  //Poner x e y del personaje
    this.m.visible = false;

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
    this.image = this.scene.add.image(this.x,this.y,newImage).setInteractive();
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
  cambiaVida(vida){
    this.scene.vidaMax += vida;
    if(this.scene.vidaMax<0)
      this.scene.vidaMax=0;
   // alert(this.scene.vidaMax);
  } 
  hablarDialogo(dialogo){
    if(this.dialogoAct !== undefined) this.scene.scene.stop('ui');
    this.dialogoAct = this.scene.scene.launch('ui',{p1:'Max', p2:this.name, vida:this.scene.vidaMax,
    name:this.scene.nameScene, texto:dialogo.texto});
    
    if(dialogo.answer !== null){
      this.estaHablando = false;
      for(var i = 0; i < dialogo.answer.length; i++){
        this.newAnswer(i, dialogo.answer[i]);
      }
    }
  }
  newAnswer(i, answer) {
    this.botones[i*2] = this.scene.add.image(650, 100+i*100, 'respuesta').setInteractive();
    this.botones[i*2+1] = this.scene.add.text(650, 100+i*100, answer.texto, { fontFamily: 'VT323',fontSize: '26px', color: '#000000' });
    Phaser.Display.Align.In.Center(this.botones[i*2+1], this.botones[i*2]);

    this.botones[i*2].on('pointerdown', () => {  //Preguntar si hay una forma mejor de decidir que hace el botón
      this.scene.pointScene += answer.puntos;
      this.cambiaVida(answer.life);
      this.estaHablando = true;
      this.numDial += answer.jump + 1;
        if(this.numDial < this.dialogos.length){
          this.hablarDialogo(this.dialogos[this.numDial]);
        }
        else{
          this.fin = true;
          this.estaHablando = false;
          this.scene.menuActivado = false;      
          this.scene.scene.stop('ui');
        }
      for(const n of this.botones){
        n.visible = false;
      }
    });
    this.botones[i*2].on('pointerover', () => {
      this.botones[i*2].setTexture('respuesta2');
    });
    this.botones[i*2].on('pointerout', () => {
      this.botones[i*2].setTexture('respuesta');
    });
  }
}
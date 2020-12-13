import Menu from './menu.js';
export default class Personaje extends Phaser.GameObjects.Sprite {
  constructor(scene,x,y,image,d,xMenu,yMenu, dialogos) {
    super(scene,x,y,image);
    scene.add.existing(this);
    this.setInteractive();
    this.space = scene.input.keyboard.addKey('SPACE')
    this.m = new Menu(scene,x/2 + xMenu,y/2 + yMenu,'#ffff',d,this);  //Poner x e y del personaje
    this.m.visible = false;

    this.numDial = 0;
    this.estaHablando = false;
    this.dialogos = dialogos;
    this.dialogoAct = undefined;
    this.botones = new Array();

    // Al clicar un objeto, aparecerá el menú si no hay otro visible    
      this.on('pointerdown', () => {
        if(!this.scene.menuActivado){
          this.m.visible = true;
          this.scene.menuActivado = true;}
        });      
      this.space.on('down', event => {
        if(this.estaHablando){
          this.numDial++;
          if(this.numDial < dialogos.length){
            this.dialogo(dialogos[this.numDial]);
          }
          else{
            this.estaHablando = false;
            this.scene.menuActivado = false;      
            this.scene.scene.stop('ui');
          }
        }
      });
  }
    
// Método que ejecuta la interfaz de diálogos.
  hablar(){    
     //Aparecen caras y cuadrado con dialogo  
    this.m.visible = false;
    this.dialogo(this.dialogos[this.numDial]);
    this.m.botonGastado(0);
    this.estaHablando = true;
  } 
  // Método que deforma los objetos (aún no hecho). 
  deformar(){   
    this.scene.menuActivado = false;    
    this.m.visible = false;
    this.m.botonGastado(1);
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
    alert(this.scene.vidaMax);
  } 
  dialogo(dialogo){
    if(this.dialogoAct !== undefined) this.scene.scene.stop('ui');
    this.dialogoAct = this.scene.scene.launch('ui',{p1:'max', p2:this.name, vida:this.scene.vidaMax,
    name:this.scene.nameScene, texto:dialogo.texto});
    
    if(dialogo.answer !== null){
      this.estaHablando = false;
      for(var i = 0; i < dialogo.answer.length; i++){
        this.newAnswer(i, dialogo);
      }
    }
  }
  newAnswer(i, dialogo) {
    this.botones[i*2] = this.scene.add.image(650, 100+i*100, 'respuesta').setInteractive();
    this.botones[i*2-1] = this.scene.add.text(650, 100+i*100, dialogo.answer[i].texto, { fontFamily: 'VT323',fontSize: '26px', color: '#ffff' });
    Phaser.Display.Align.In.Center(this.botones[i*2-1], this.botones[i*2]);

    this.botones[i*2].on('pointerdown', () => {  //Preguntar si hay una forma mejor de decidir que hace el botón
      this.scene.nextScene += dialogo.answer[i].puntos;
      this.estaHablando = true;
      this.numDial++;
        if(this.numDial < this.dialogos.length){
          this.dialogo(this.dialogos[this.numDial]);
        }
        else{
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
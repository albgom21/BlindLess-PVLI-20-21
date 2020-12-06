import Menu from './menu.js';
export default class Personaje extends Phaser.GameObjects.Sprite {
  constructor(scene,x,y,image,d,xMenu,yMenu) {
    super(scene,x,y,image);   
    scene.add.existing(this);
    this.setInteractive();        
    this.m = new Menu(scene,x/2 + xMenu,y/2 + yMenu,'#ffff',d,this);  //Poner x e y del personaje
    this.m.visible = false;
    // Al clicar un objeto, aparecerá el menú si no hay otro visible
    
      this.on('pointerdown', () => {
        if(this.scene.menuActivado === false){
          this.m.visible = true;
          this.scene.menuActivado = true;}
        });      
         
  }
    
// Método que ejecuta la interfaz de diálogos.
  hablar(){    
     //Aparecen caras y cuadrado con dialogo  
    this.scene.scene.launch('ui',{p1:'max', p2:this.name, vida:this.scene.vidaMax,
    name:this.scene.nameScene});  
    this.m.visible = false;  
    this.scene.menuActivado = false;   //Poner en false cuando se haya acabado el dialogo 
  } 
  // Método que deforma los objetos (aún no hecho). 
  deformar(){   
    this.m.visible = false;  
    this.scene.menuActivado = false;    
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
}
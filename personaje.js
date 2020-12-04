import Menu from './menu.js';
export default class Personaje extends Phaser.GameObjects.Sprite {
  constructor(scene,x,y,image) {
    super(scene,x,y,image);   
    scene.add.existing(this);
    this.setInteractive();        
    this.m =  new Menu(scene,450,100,'#ffff','boton','boton2',this);  //Poner x e y del personaje
    this.m.visible = false;
      // Al clicar un objeto, aparecerá el menú.
    this.on('pointerdown', () => {this.m.visible = true;});  

    // La vida de Max. No va aqui en la escena del juego
    this.maxLife = 100;
  }
    
// Método que ejecuta la interfaz de diálogos.
  hablar(){    
     //Aparecen caras y cuadrado con dialogo   
    this.scene.scene.launch('ui',{p1:'max', p2:this.name, vida:this.maxLife,
    name:this.scene.nameScene});  //this.scene.vidaMax       
    this.m.visible = false;      
  } 
  // Método que deforma los objetos (aún no hecho). 
  deformar(){   
    this.m.visible = false;   
  } 
  salir(){    
    this.scene.scene.stop('ui');
    this.m.visible = false;       
  } 
  // Método que le resta vida a Max.
  restaVida(){
    this.maxLife = this.maxLife - 10;
    alert(this.maxLife);
   }
  // Método que le aumenta vida a Max.
    aumentaVida(){
    this.maxLife = this.maxLife + 10;
    alert(this.maxLife);
   }
  // Método que muestra la vida de Max.
   mostrarVida(){
    alert('La vida de Max es de ' + this.maxLife + ' puntos');
    }
}
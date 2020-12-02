export default class MyObject extends Phaser.GameObjects.Sprite {
  constructor(scene,x,y,image) {
    super(scene,x,y,image);

      scene.add.existing(this);
      this.setInteractive();    
    // Al clicar un objeto, aparecerá el menú.
      this.on('pointerdown', () => {this.menu()});  
    // Se estiliza el menú.
      let style = { font: "32px Helvetica", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    
      this.txt = scene.add.text(x-200,y-200 ,'HABLAR',style);
      this.txt.setShadow(3, 2, 'rgba(0,0,0,0.5)', 3);
      this.txt.setInteractive();
      this.txt.on('pointerdown', () => {this.hablar()});  
    
      this.txt2 = scene.add.text(x-200,y-150 ,'DEFORMAR',style);
      this.txt2.setShadow(3, 2, 'rgba(0,0,0,0.5)', 3);
      this.txt2.setInteractive();
      this.txt2.on('pointerdown', () => {this.deformar()});

      this.txt3 = scene.add.text(x-200,y-100 ,'SALIR',style);
      this.txt3.setShadow(3, 2, 'rgba(0,0,0,0.5)', 3);
      this.txt3.setInteractive();
      this.txt3.on('pointerdown', () => {this.salir()});  

    // Se pone a false para que aparezca cuando interactuas un objeto.
      this.txt.visible = false;
      this.txt2.visible = false;
      this.txt3.visible = false;    

    // La vida de Max.
      this.maxLife = 100;

  }  
  preload(){   
    //scene.load.image('latino','sprites/latino.png');
  }
  create(){
    //scene.add.image(125,575,'latino'); 
  }
 // Método que hace aparecer el menú.
  menu(){    
   this.txt.visible = true;
   this.txt2.visible = true;  
   this.txt3.visible = true;  
  }
 // Método que esconde el menú.
  menuFalse(){
   this.txt.visible = false;
   this.txt2.visible = false;
   this.txt3.visible = false;     
  }
 // Método que ejecuta la interfaz de diálogos.
  hablar(){    
   this.scene.scene.run('ui');  
   this.menuFalse();     
  }  
 // Método que deforma los objetos (aún no hecho).
   deformar(){ 
    //Cambiar el sprite this.image.setTexture('latino');   
   alert('D');    
   this.menuFalse();
  } 
 // Método que permite salir del menú sin elegir una opción.
   salir(){    
   this.scene.scene.sleep('ui');  
   this.menuFalse();     
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
export default class MyObject extends Phaser.GameObjects.Sprite {
  constructor(scene,x,y,image) {
    super(scene,x,y,image);

    scene.add.existing(this);
    this.setInteractive();    
    this.on('pointerdown', () => {this.menu()});  

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

    this.txt.visible = false;
    this.txt2.visible = false;
    this.txt3.visible = false;    
  }  
  preload(){   
    //scene.load.image('latino','sprites/latino.png');
  }
  create(){
    //scene.add.image(125,575,'latino'); 
  }
   menu(){    
      this.txt.visible = true;
      this.txt2.visible = true;  
      this.txt3.visible = true;  
  }
  hablar(){    
    this.scene.scene.run('ui');  
    this.txt.visible = false;
    this.txt2.visible = false;
    this.txt3.visible = false;      
    //Aparecen caras y cuadrado con dialogo          
  }  
  deformar(){ 
    //Cambiar el sprite this.image.setTexture('latino');   
    alert('D');    
  } 
  salir(){    
    this.scene.scene.sleep('ui');  
    this.txt.visible = false;
    this.txt2.visible = false;
    this.txt3.visible = false;       
  } 
}
import Latino from "./latino.js";
import dialogos from './dialogos.js';
import Rata from "./rata.js";

export default class Calle1 extends Phaser.Scene {  
    constructor() {
      super({ key: "calle1" });  
      this.pointScene = 0;
      this.menuActivado = false;    
      this.fin = new Array(1);
      this.key = 'calle1';
    }
  
  init(datos){
    this.vidaMax = datos.vidaMax;
    this.datosInventario = datos.datosInventario;
  }
    
  create(){
    this.cameras.main.fadeIn(1500); 
    this.scene.stop('mapa');
    this.nameScene = 'CALLE';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'calle');  
    this.donLatino = new Latino(this, 400, 400, 'latcuerpo', dialogos.dCalle1, 0, false);
    this.add.image(1000, 400, 'peregrinocuerpo');
    this.rata = new Rata(this, 733, 350, 'Rata', dialogos.rata, dialogos.rataD);  
    if(this.pointScene > 10) this.donLatino.aparece = true;

    
    // Botón del inventario.
    this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
    this.botonT.on('pointerdown', () => {  if(!this.menuActivado) this.scene.launch('inventario', {datosInventario: this.datosInventario}); }) 
    
  
     
    this.cameras.main.once('camerafadeoutcomplete', () => {
      this.scene.launch('mapa',{antEscena:this.key, proxEscena:'taberna1', nombreEscena:'TABERNA',
       vida:this.vidaMax, suma:10, resta:7, datosInventario: this.datosInventario}) 
  });
  }

  aparece(){
    this.add.image(600, 400, 'peregrinocuerpo');   
  }

  finEscena(){    
    let a = true ;
    let i = 0;
    while(a && i < this.fin.length) {
      if (this.fin[i]) i++;
      else a = false;
    }
    if(a) { //Que hayan hablado todos los personajes de la escena
      a = false;
      let botonEscena = this.add.image(1175, 100, 'botonescena').setInteractive();
        botonEscena.once('pointerdown', () => {this.cameras.main.fadeOut(1500)});      
    }      
   }
}
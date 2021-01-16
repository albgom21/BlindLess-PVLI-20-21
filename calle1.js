import Latino from "./latino.js";
import dialogos from './dialogos.js';
export default class Calle1 extends Phaser.Scene {  
    constructor() {
      super({ key: "calle1" });  
      this.pointScene = 0;
      this.menuActivado = false;    
      this.fin = [1];
      this.key = 'calle1';
    }
    init(datos){
      this.vidaMax = datos.vidaMax;
    }
    
  create(){
    this.scene.stop('mapa');
    this.nameScene = 'CALLE';
    this.add.image(640, 360, 'calle');
    this.donLatino = new Latino(this, 400, 400, 'latcuerpo', dialogos.dCalle1, 0, false);
    if(this.pointScene > 10) this.donLatino.aparece = true;
  }

  aparece(){
    this.add.image(600, 400, 'peregrinocuerpo');
    //this.donLatino2 = new Latino(this, 400, 400, 'latcuerpo', dialogos.dCalle2, 0);
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
        botonEscena.on('pointerdown', () => {this.scene.launch('mapa',{antEscena:this.key, proxEscena:'taberna1', nombreEscena:'TABERNA', vida:this.vidaMax, suma:10, resta:7})});
      
    }      
   }


}
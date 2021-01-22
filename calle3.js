import Latino from "./latino.js";
import dialogos from './dialogos.js';

export default class Calle3 extends Phaser.Scene {  
    constructor() {
      super({ key: "calle3" });  
      this.pointScene = 0;
      this.menuActivado = false;    
      this.fin = [];
      this.fin[0] = false;
      this.key = 'calle3';
    }
  
  init(datos){
    this.vidaMax = datos.vidaMax;
    this.datosInventario = datos.datosInventario;
  }
    
  create(){
    this.musica = this.sound.add("calle",{volume: 0.5,loop: true});
    this.musica.play();
    this.cameras.main.fadeIn(1500); 
    this.scene.stop('mapa');
    this.nameScene = 'CALLE';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'calle');  
    this.donLatino = new Latino(this, 400, 400, 'latcuerpo', dialogos.dLatinoCalle3, 0, false);
    // Botón del inventario.
    this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
    this.botonT.on('pointerdown', () => {  if(!this.menuActivado) this.scene.launch('inventario', {datosInventario: this.datosInventario}); })     
    this.cameras.main.once('camerafadeoutcomplete', () => {
      this.musica.stop();
      this.scene.launch('mapa',{antEscena:this.key, proxEscena:'casa3', nombreEscena:'CASA',
       vida:this.vidaMax, suma:0, resta:45, datosInventario: this.datosInventario})
  });
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
        botonEscena.once('pointerdown', () => {this.paso = this.sound.add("pasarescena",{volume:1}); this.paso.play();this.cameras.main.fadeOut(1500)});      
    }      
   }
}
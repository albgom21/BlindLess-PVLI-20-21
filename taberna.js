import dialogos from './dialogos.js';
import Latino from './latino.js';
import Veneno from './veneno.js';
import Coleccionables from './coleccionables.js';
export default class Taberna1 extends Phaser.Scene {
  
    constructor() {
      super({ key: 'taberna1'});     
      this.menuActivado = false;       
      this.fin = [];
      this.fin[0] = false;
      this.key = 'taberna1';    
      this.pointScene = 0;
    } 
  
    init(datos){
      this.vidaMax = datos.vidaMax;
      this.datosInventario = datos.datosInventario;
    }
    
    create() {  
      this.musica = this.sound.add("musicataberna",{volume: 0.25,loop: true});
      this.musica.play();
      this.cameras.main.fadeIn(1500); 
      this.scene.stop('mapa');
      this.nameScene = 'TABERNA';    
      this.add.image(640, 360, 'fondoShakeDanyo'); 
      this.add.image(640, 360, 'taberna');   
      this.add.image(1000, 500, 'lapisabiencuerpo');    
      this.objeto = new Coleccionables(this, 650, 180, 'Radio');
      this.x = new Veneno(this, 933, 66, 'Bebida', dialogos.dVeneno, dialogos.dVenenoD); 
      this.latCuerpo = new Latino(this, 500, 400, 'latcuerpo', dialogos.dTaberna1, 0, false);  
      
      // Botón del inventario.
      this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
      this.botonT.on('pointerdown', () => {  if(!this.menuActivado) this.scene.launch('inventario', {datosInventario: this.datosInventario}); }) 
    
      
      this.cameras.main.once('camerafadeoutcomplete', () => {
        this.musica.stop(),
        this.scene.launch('mapa',{antEscena:this.key, proxEscena:'taberna2', nombreEscena:'TABERNA',
         vida:this.vidaMax, suma:0, resta:13, datosInventario: this.datosInventario, puntos : this.pointScene})
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
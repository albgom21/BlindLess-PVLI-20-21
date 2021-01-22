import Latino from './latino.js';
import dialogos from './dialogos.js';
import Coleccionables from './coleccionables.js';
export default class Bunyoleria extends Phaser.Scene {
  
  constructor() {
    super({ key: 'bunyoleria'});    
    this.menuActivado = false;   
    this.pointScene = 0;
    this.fin = new Array(1); // array con el número de personajes  
    this.key = 'bunyoleria';   
  }

  init(datos){
    this.vidaMax = datos.vidaMax;    
    this.datosInventario = datos.datosInventario;
  }
  
  create() { 
    this.musica = this.sound.add("musicabun",{volume: 0.25,loop: true});
    this.musica.play();    
    this.cameras.main.fadeIn(1500); 
    this.scene.stop('mapa');
    this.nameScene = 'BUÑOLERíA';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'bunyoleria');            
    this.latCuerpo = new Latino(this, 400, 500, 'latcuerpo', dialogos.dBunyols, 0);
    this.objeto = new Coleccionables(this, 640, 60, 'Reloj');
    // Botón del inventario.
    this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
    this.botonT.on('pointerdown', () => {  if(!this.menuActivado) this.scene.launch('inventario', {datosInventario: this.datosInventario}); }) 
    
  
    this.cameras.main.once('camerafadeoutcomplete', () => {
        this.musica.stop();   
       if (this.pointScene > 10) this.scene.launch('callegormada');
       else this.scene.launch('mapa',{antEscena:this.key,proxEscena:'ministerio2',
       nombreEscena:'MINISTERIO',vida:this.vidaMax,suma:0 ,resta:3, datosInventario : this.datosInventario});
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
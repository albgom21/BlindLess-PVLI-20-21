import Collet from './collet.js';
import dialogos from './dialogos.js';

export default class Casa2sp extends Phaser.Scene {
  
  constructor() {
    super({ key: 'casa2sp'});        
    this.pointScene = 0;
    this.menuActivado = false;       
    this.fin = [];
    this.fin[0] = false;
    this.key = 'casa2sp';    
  }
  
  init(datos){
    this.vidaMax = datos.vidaMax;
    this.datosInventario = datos.datosInventario;
  }
  
  create() {  // Refactorizar diálogos y escena 
    this.musica = this.sound.add("musicacasa",{volume: 0.025,loop: true});
    this.musica.play();     
    this.cameras.main.fadeIn(1500); 
    this.scene.stop('mapa');
    this.nameScene = 'CASA';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'casa');         
    this.madame = new Collet(this, 500, 400, 'madamcuerpo', dialogos.mcCasa2sp, 0); 
 
    // Botón del inventario.
    this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
    this.botonT.on('pointerdown', () => {  if(!this.menuActivado) this.scene.launch('inventario', {datosInventario: this.datosInventario}); }) 
    
    this.cameras.main.once('camerafadeoutcomplete', () => {    
      this.musica.stop(),
       this.scene.launch('mapa',{antEscena:this.key,proxEscena:'ministerio3casa',nombreEscena:'MINISTERIO',
       vida:this.vidaMax,suma:12,resta:13, datosInventario : this.datosInventario});     
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
      

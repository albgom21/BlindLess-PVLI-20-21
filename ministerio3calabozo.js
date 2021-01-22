import Gobernante from './gobernante.js';
import dialogos from './dialogos.js';
import Coleccionables from './coleccionables.js';
export default class Ministerio3calabozo extends Phaser.Scene {
  
  constructor() {
    super({ key: 'ministerio3calabozo'});        
    this.pointScene = 0;
    this.menuActivado = false;       
    this.fin = new Array(1); // array con el número de personajes  
    this.key = 'ministerio3calabozo';    
    this.nums = [];
  }
  
  init(datos){
    this.vidaMax = datos.vidaMax;
    this.datosInventario = datos.datosInventario;
  }
  
  create() {  // Refactorizar diálogos y escena    
    this.musica = this.sound.add("musicaministerio",{volume: 0.25,loop: true});
    this.musica.play();  
    this.cameras.main.fadeIn(1500); 
    this.scene.stop('mapa');
    this.nameScene = 'MINISTERIO';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'ministerio');         
    this.madame = new Gobernante(this, 900, 350, 'gobernantecuerpo', dialogos.goberMinis3Calabozo, 0); 
    this.objeto = new Coleccionables(this, 740, 440, 'Lacre');
    // Botón del inventario.
    this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
    this.botonT.on('pointerdown', () => {  if(!this.menuActivado) this.scene.launch('inventario', {datosInventario: this.datosInventario}); }) 

    this.cameras.main.once('camerafadeoutcomplete', () => {    
       this.musica.stop(); 
       this.scene.launch('mapa',{antEscena:this.key,proxEscena:'taberna3',nombreEscena:'TABERNA',
       vida:this.vidaMax,suma:0,resta:5, datosInventario : this.datosInventario});     
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
      

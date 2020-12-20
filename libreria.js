import Zaratustra from './zaratustra.js';
import Latino from './latino.js';
export default class Libreria extends Phaser.Scene {  
    constructor() {
      super({ key: "libreria" });      
    this.pointScene = 0;
    this.menuActivado = false;    
    this.fin = new Array(2); // array con el numero de personajes    
    this.key = 'libreria';
    }
    init(datos){
      this.vidaMax = datos.vidaMax;
    }
    
  create(){
    this.scene.stop('inicio');
    this.nameScene = 'LIBRERIA';
    //this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'libreria');
    let dialogos = new Array();
    dialogos.push({texto: 'Si te presentas ahora conmigo en la tienda\nde ese granuja y le armas un escándalo, le sacas\nhasta dos duros. Tú tienes otro empaque.'});
    this.zarCuerpo = new Zaratustra(this, 1000, 400, 'zaratustracuerpo', dialogos, 0);    
    dialogos = new Array();
    dialogos.push({texto: '¡Oh, admirado y querido gran amigo mio, Max!, tu\nmujer y su  hija desde que he entrado han estado\nacribillándome por el dinero.'});
    dialogos.push({texto: 'Siguen sin fiarse de mí.\nAdemás el librero nos ha timado pagándonos\n¡Solo tres pesetas! ¡Tres miseras pesetas!\n¡Un robo!'});
    dialogos.push({texto: 'Si te presentas ahora conmigo en la tienda\nde ese granuja y le armas un escándalo, le sacas\nhasta dos duros. Tú tienes otro empaque.'});
    this.latCuerpo = new Latino(this, 500, 400, 'latcuerpo', dialogos, 1);        
  }
  finEscena(){    
    let a = true;
    let i = 0;
    while(a && i<this.fin.length){
      if (this.fin[i]) i++;
      else a = false;
    }
    if(a)
    { //que hayan hablado todos los personajes de la escena
      a = false;
      const botonEscena = this.add.image(1175, 100, 'botonescena').setInteractive();
      botonEscena.on('pointerdown', () => {this.scene.launch('mapa',{antEscena:this.key,proxEscena:'libreria',nombreEscena:'TABERNA',vida:this.vidaMax,suma:10,resta:20})});
    }       
  }  
}

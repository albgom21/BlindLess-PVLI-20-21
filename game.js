import Latino from './latino.js';
import Gafas from './gafas.js';
import Collet from './collet.js';
export default class Game extends Phaser.Scene {
  
  constructor() {
    super({ key: 'game'});    
    this.vidaMax = 100;
    this.pointScene = 0;
    this.menuActivado = false;
    this.orden = false;
    this.fin = new Array(2); // array con el numero de personajes
    this.fin[0]= false;
    
  }
  create() {
    this.scene.stop('inicio');
    this.nameScene = 'CASA';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'fondo'); 
    
    let dialogos = new Array();
    dialogos.push({texto: ' \n Ten paciencia, Max. Ya sé que no podemos ganar \n dinero, y además solo te dieron 40 talegos por \n esas cuatro crónicas. No temo a la idea del \n suicidio colectivo, pero tenemos una hija, \n Max. ¡Es muy joven! No puede morir todavía. '});
    dialogos.push({texto: '¿Qué responde Max?',
      answer: [{texto: 'También se matan los jóvenes.', points: 10, life: 0, jump: 0},
               {texto: 'Tienes toda la razón.', points: 0, life: 0, jump: 0},
               {texto: '¿Y si la convencemos para el suicidio colectivo?', points: 50, life: -10, jump: 2,razon:"intento de suicidio"}]});
    dialogos.push({texto: ' \n \n Max, los jóvenes no se matan por cansancio de la \n vida. Los jóvenes se matan por romanticismo. No \n desesperes. Otra puerta se abrirá. No te pongas \n a gatas, Max. Todos reconocen tu talento.    ',personaje:'Latino'});
    dialogos.push({texto: '¿Qué responde Max?',
    answer: [{texto: 'Ninguna editora me cogeria ', points: 10, life: 0, jump: 0},
              {texto: 'Puedo intentar hacer lo minimo por nuestra hija', points: 10, life: 0, jump: 0},
              {texto: 'Sigo pensando en el suicidio colectivo ', points: 10, life: 0, jump: 2}
     ], personaje:'Collet'});
    dialogos.push({texto: ' \n Pues ves a hablar con tu fiel amigo Don Latino que  \n a mí ya me tienes casi olvidada. Tú y tus  \n generosidades nos han dejado sin cena...  \n Si no fuera por nuestra hija Claudinita ya  \n podríamos estar muertos, Max.    '});
    this.madame = new Collet(this, 500, 400, 'Collet', dialogos, 0);
    if(this.madame.fin) this.orden = true;
    //this.gafas = new Personaje(this, 733, 350, 'gafas');  //No pueden crearse a partir de la clase que heredan
    dialogos = new Array();
    let dialogoDef = new Array();
    dialogoDef.push({texto: 's\nhola'});
    dialogoDef.push({texto: 's\nadios'});
    this.g = new Gafas(this, 733, 350, 'Gafas', dialogos, dialogoDef);
    let dialogoC = new Array();
    if (this.pointScene == 20) {
      dialogoC.push({texto: '¡Oh, admirado y querido gran amigo mio, Max!, tu \n mujer y su  hija desde que he entrado han estado \n acribillándome por el dinero. Siguen sin fiarse de \n mí. Además el librero nos ha timado pagándonos \n ¡Solo tres pesetas! ¡Tres miseras pesetas! ¡Un \n robo! Si te presentas ahora conmigo en la tienda \n de ese granuja y le armas un escándalo, le sacas \n hasta dos duros. Tú tienes otro empaque. '});
    }else dialogoC.push({texto: 'Creo que tu mujer quiere hablar contigo...'});
    this.latCuerpo = new Latino(this, 1000, 400, 'latcuerpo', dialogoC, 1);
    //this.botella = new Personaje(this, 300, 264, 'botella');  // hacer clases que hereden de Personaje
   // this.corazon = new Personaje(this, 1230, 655, 'corazon');
   // this.boton = new Loteria(this, 60, 655, 'botont');
   // this.ticket = new Loteria(this, 400, 500, 'loteria');

    //this.latCuerpo.on('pointerdown', () => {this.aparece()});   
    //this.gafas.on('pointerdown', () => {this.gafas.restaVida()});
    //this.botella.on('pointerdown', () => {this.gafas.aumentaVida()});
    //this.corazon.on('pointerdown', () => {this.gafas.mostrarVida()});
    //this.boton.on('pointerdown', () => {this.ticket.verNumeros()});
    //this.ticket.on('pointerdown', () => {this.ticket.crearNumero()});       
  }  

  finEscena(){    
    let a = true ;
    let i = 0;
    while(a && i<this.fin.length){
      if (this.fin[i]) i++;
      else a = false;
    }
    if(a)
    { //que hayan hablado todos los personajes de la escena
      a = false;
      const botonEscena = this.add.image(1175, 100, 'botonescena').setInteractive();
      botonEscena.on('pointerdown', () => {this.scene.launch('mapa',{proxEscena:'game',nombreEscena:'CASA',vida:this.vidaMax,suma:10,resta:20})});  //Poner los parametros
    }       
  }
  
  getVidaMax(){
    return this.vidaMax;
  }
}
